import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactEChart from 'echarts-for-react'
import { FormControl, TextField, Tooltip, ThemeProvider, createTheme } from '@mui/material';
import { FaCheck, FaTrashAlt } from 'react-icons/fa'
import { FaArrowTrendDown } from 'react-icons/fa6'

import { actionPlanAPI, actionPlanIndividualAPI } from '../hooks/functions'
import { categories } from '../local'
import useFetchData from '../hooks/useFetchData'

const ActionPlan = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()
  const [actionCategories, setActionCategories] = useState([])
  const [resultChart, setResultChart] = useState([])
  const [totalEmission, setTotalEmission] = useState(0)
  const [totalReduction, setTotalReduction] = useState({ percent: 0, number: 0 })
  const [totalReductionRecent, setTotalReductionRecent] = useState('percent')
  const [reductionLoading, setReductionLoading] = useState(false)
  const [targetsList, setTargetsList] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [reducePlans, setReducePlans] = useState([])
  
  const fetch = useFetchData({ refresh })
  const [loading, data, chartSector] = fetch

  useEffect(() => {
    setCurrentRoute('actionplan')
    document.getElementById('global-container').scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  useEffect(() => {
    if (loginStatus.login === false) {
      navigate('/')
    } else {
      if (loginStatus.plan === 'none') {
        navigate('/pricing')
      }
    }
  }, [loginStatus.login, loginStatus.plan])

  useEffect(() => {
    const final = []
    const tempCat = categories.map(e => e.categories)

    tempCat.forEach(e => {
      e.forEach(element => {
        final.push(element)
      });
    });

    setReducePlans(final);
  }, [])

  useEffect(() => {
    if (data.data && data.data.length > 0) {
        const list = data.data
        const sameCategories = Array.from(new Set(list.map(e => e.category)))
        let final = []
        for (let i = 0; i < sameCategories.length; i++) {
            const tempEmission = list.filter(f => f.category === sameCategories[i])
            final.push({ name: sameCategories[i], value: tempEmission.map(e => e.co2e).reduce((a, c) => a + c, 0).toFixed(1) })
        }
        setTotalEmission(Number(final.map(e => Number(e.value)).reduce((a, c) => a + c, 0).toFixed(0)))
        setActionCategories(final)

        if (data.target) {
          const temp = data.target.find(f => f.category === 'Total')
          const total = Number(final.map(e => Number(e.value)).reduce((a, c) => a + c, 0))
          if (temp) {
            if (temp.percent > 0) {
              setTotalReduction({ percent: temp.percent, number: ((total*temp.percent)/100).toFixed(2) })
              setTotalReductionRecent('percent')
            } else {
              setTotalReduction({ percent: (100 - (total - temp.value)/total*100).toFixed(2), number: temp.value })
              setTotalReductionRecent('value')
            }
          }
        }
    } else {
        setActionCategories([])
    }
  }, [data])

  useEffect(() => {
    if (actionCategories.length > 0) {
        const res = actionCategories.map(e => {
            const temp = data?.target?.find(f => f.category === e.name)
            if (temp) {
                return { name: e.name, value: (temp.percent > 0) ? Number((Number(e.value)-(Number(e.value)*temp.percent/100)).toFixed(2)) : Number((Number(e.value)-temp.value).toFixed(2)) }
            } else {
                return { name: e.name, value: Number(Number(e.value).toFixed(2)) }
            }
        })

        const resTargets = actionCategories.map(e => {
          const input = data?.target?.find(f => f.category === e.name)
          if (input) {
            if (input.percent > 0) {
              return { name: e.name, value: e.value, percentInput: input.percent, valueInput: ((e.value*input.percent)/100), recent: 'percent' }
            } else {
              return { name: e.name, value: e.value, percentInput: (100 - (e.value - input.value)/e.value*100), valueInput: input.value, recent: 'value' }
            }
          } else {
            return { name: e.name, value: e.value, percentInput: 0, valueInput: 0, recent: 'percent' }
          }
        })

        setTargetsList(resTargets)
        setResultChart(res)
    }
  }, [actionCategories])

  const emissionsPieChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
      feature: {
        saveAsImage: { show: true }
      }
    },
    legend: {
      left: 'center'
    },
    series: [
      {
        name: 'Emissions By',
        type: 'pie',
        radius: '90%',
        percentPrecision: 0,
        data: (actionCategories.length > 0) ? actionCategories : [],
        label: {
            show: true,
            position: 'inside',
            formatter: '{d}%'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 5,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          label: {
            show: true,
            fontWeight: 'bold',
          }
        }
      }
    ]
  };

  const newEmissionsPieChartOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
      feature: {
        saveAsImage: { show: true }
      }
    },
    legend: {
      left: 'center'
    },
    series: [
      {
        name: 'Emissions By',
        type: 'pie',
        radius: '90%',
        percentPrecision: 0,
        data: resultChart,
        label: {
            show: true,
            position: 'inside',
            formatter: '{d}%'
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 5,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          label: {
            show: true,
            fontWeight: 'bold',
          }
        }
      }
    ]
  };

  const ReductionComponent = ({ cat }) => {
    const [reduction, setReduction] = useState({ percent: cat.percentInput.toFixed(0), number: cat.valueInput.toFixed(0) })
    const [redLoading, setRedLoading] = useState(false)
    const [reductionRecent, setReductionRecent] = useState(cat.recent)
    const emission = cat.value ? cat.value : 0

    const isValueChanged = () => {
      let result = false
      
      if (data.target) {
        const temp = data.target.find(f => f.category === cat.name)
        if (temp) {
          if (reductionRecent === 'percent') {
            if (temp.percent !== Number(reduction.percent)) {
              result = true
            } else {
              result = false
            }
          } else {
            if (temp.value !== Number(reduction.number)) {
              result = true
            } else {
              result = false
            }
          }
        } else {
          result = false
        }
      }
  
      return result
    }

    return (
      <div className='h-fit w-full flex flex-col border border-slate-200 p-[10px] rounded-xl gap-[10px]'>
        <p className='leading-none md:text-sm'>{cat.name}</p>
        <div className='h-fit w-full grid grid-cols-[1fr_min-content] gap-[10px] xxl:grid-cols-1'>
          <div className='h-fit w-full grid grid-cols-[200px_1fr_200px] gap-[10px] xxxl:grid-cols-[150px_1fr_150px] lg:grid-cols-[100px_1fr_100px] md:grid-cols-[70px_1fr_70px]'>
            <div className='h-full w-full flex items-center justify-center'>
              <p className='text-2xl font-medium leading-normal md:text-xl'>{(Number(emission) > 1000) ? (Number(emission/1000)).toFixed(0) : Number(emission).toFixed(0)}<span className='text-[12px] text-slate-500'>{(Number(emission) > 1000) ? 't' : 'kg'}</span></p>
            </div>
            <div className='h-full w-full flex justify-center flex-col'>
              <div className='h-fit w-full flex items-center justify-center gap-[5px]'>
                <div className='hidden sm:flex'><FaArrowTrendDown size={12} className='fill-sky-400'/></div>
                <p className='text-[12px] leading-none text-sky-400 sm:hidden'>Reduction</p>
              </div>
              <div className='h-fit w-full flex items-center'>
                <div className='h-[2px] w-full bg-gradient-to-r from-white to-sky-500'/>
                <div className='h-0 w-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-sky-500'/>
              </div>
            </div>
            <div className='h-full w-full flex items-center justify-center'>
              <p className='text-2xl text-sky-500 font-medium leading-normal md:text-xl'>{(Number(emission) > 1000) ? (Number(emission/1000)).toFixed(0) : (Number(emission)-reduction.number).toFixed(0)}<span className='text-[12px] text-sky-400'>{(Number(emission) > 1000) ? 't' : 'kg'}</span></p>
            </div>
          </div>
          
          <div className='h-fit w-full flex flex-row items-center justify-end gap-[10px] md:flex-col md:items-end md:justify-start'>
            <div className='grid grid-cols-[100px_100px] gap-[10px] md:grid-cols-2'>
              <FormControl style={{ width: "100%" }}>
                <TextField label="%" placeholder='100' disabled={redLoading} type='number' size='small' inputMode='numeric' value={reduction.percent}
                  onChange={e => { setReduction({percent: e.target.value, number: ((emission*e.target.value)/100).toFixed(2)}); setReductionRecent('percent'); }}
                  onKeyDown={e => (e.key === 'Enter' && isValueChanged() && !redLoading) && actionPlanIndividualAPI({ category: cat.name, percent: Number(e.target.value), value: 0, setRefresh, setRedLoading, navigate })}
                />
              </FormControl>
              <FormControl style={{ width: "100%" }}>
                <TextField label="Value" placeholder='100' disabled={redLoading} type='number' size='small' inputMode='numeric' value={reduction.number}
                  onChange={e => { setReduction({percent: (100 - (emission - e.target.value)/emission*100).toFixed(2), number: e.target.value}); setReductionRecent('value'); }}
                  onKeyDown={e => (e.key === 'Enter' && isValueChanged() && !redLoading) && actionPlanIndividualAPI({ category: cat.name, percent: 0, value: Number(e.target.value), setRefresh, setRedLoading, navigate})}
                />
              </FormControl>
            </div>
            <div className='grid grid-cols-[40px_40px] gap-[10px]'>
              <div className='h-full w-full flex items-center justify-center'>
                <Tooltip title='Confirm Inputs' arrow>
                  <div
                    className={`w-[40px] h-[40px] ${isValueChanged() ? 'bg-green-500 cursor-pointer hover:opacity-50' : 'bg-slate-100 cursor-not-allowed'} rounded-full flex items-center justify-center duration-200`}
                    onClick={() => {
                      if (isValueChanged() && !redLoading) {
                        if (reductionRecent === 'percent') {
                          actionPlanIndividualAPI({ category: cat.name, percent: Number(reduction.percent), value: 0, setRefresh, setRedLoading, navigate })
                        } else {
                          actionPlanIndividualAPI({ category: cat.name, percent: 0, value: Number(reduction.number), setRefresh, setRedLoading, navigate})
                        }
                      } else {
                        return
                      }
                    }}
                  >
                    {redLoading ? (
                      <div className='h-[30px] w-[30px] rounded-full border-[3px] border-transparent border-y-[3px] border-y-white animate-spin'/>
                    ) : (
                      <FaCheck size={14} className={isValueChanged() ? 'fill-white' : 'fill-slate-500'}/>
                    )}
                  </div>
                </Tooltip>
              </div>
              <div className='h-full w-full flex items-center justify-center'>
                <Tooltip title='Delete Inputs' arrow>
                  <div
                    className={`w-[40px] h-[40px] ${(reduction.percent > 0 || reduction.value > 0) ? 'bg-red-400 cursor-pointer hover:opacity-50' : 'bg-slate-100 cursor-not-allowed'} rounded-full flex items-center justify-center duration-200`}
                    onClick={() => {
                      if ((reduction.percent > 0 || reduction.value > 0) && !redLoading) {
                        actionPlanIndividualAPI({ category: cat.name, percent: 0, value: 0, setRefresh, setRedLoading, navigate})
                      } else {
                        return
                      }
                    }}
                  >
                    {redLoading ? (
                      <div className='h-[30px] w-[30px] rounded-full border-[3px] border-transparent border-y-[3px] border-y-white animate-spin'/>
                    ) : (
                      <FaTrashAlt size={14} className={`${(reduction.percent > 0 || reduction.value > 0) ? 'fill-white' : 'fill-slate-500'} duration-200`}/>
                    )}
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

  const findTotalReducedEmission = () => {
    let result = 0

    if (data.target) {
      const temp = data.target.find(f => f.category === 'Total')
      if (temp) {
        if (temp.percent > 0) {
          result = totalEmission - (totalEmission*temp.percent)/100
        } else {
          result = totalEmission - temp.value
        }
      }
    }

    return (typeof(result) === 'number') ? result.toFixed(0) : result
  }

  const isTotalValueChanged = () => {
    let result = false
    
    if (data.target) {
      const temp = data.target.find(f => f.category === 'Total')
      if (temp) {
        if (totalReductionRecent === 'percent') {
          if (temp.percent !== Number(totalReduction.percent)) {
            result = true
          } else {
            result = false
          }
        } else {
          if (temp.value !== Number(totalReduction.number)) {
            result = true
          } else {
            result = false
          }
        }
      } else {
        result = false
      }
    }

    return result
  }

  return (
    <div className='h-fit min-h-[calc(100%-80px)] w-full bg-slate-100 flex justify-center mobile:min-h-[calc(100%-60px)]'>
      <div className='h-fit w-full max-w-[1700px] py-[20px] px-[20px] flex flex-col gap-[20px] md:px-0'>
        {/* top */}
        <p className='text-2xl font-bold md:px-[20px]'>Action Plan</p>

        {/* calculation part */}
        <div className='h-[500px] w-full grid grid-cols-1'>
          <div className='h-full w-full flex flex-col gap-[10px] py-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl overflow-hidden md:rounded-none'>
            <div className='px-[20px] flex items-center gap-[5px]'>
              <p className='font-bold'>Carbon Reduction Goals</p>
              {loading ? (
                <div className='h-[20px] w-[20px] border-[4px] border-sky-500 border-t-[4px] border-t-sky-100 rounded-full animate-spin'/>
              ) : (<></>)}
            </div>

            <div className='h-full w-full flex flex-col px-[20px] gap-[10px] overflow-y-scroll fancy-scrollbar'>
              <div className='h-fit w-full flex flex-col bg-slate-800 border border-slate-800 p-[10px] rounded-xl gap-[10px]'>
                <p className='leading-none text-white md:text-sm'>Total</p>
                <div className='h-fit w-full grid grid-cols-[1fr_min-content] gap-[10px] xxl:grid-cols-1'>
                  <div className='h-fit w-full grid grid-cols-[200px_1fr_200px] gap-[10px] xxxl:grid-cols-[150px_1fr_150px] lg:grid-cols-[100px_1fr_100px] md:grid-cols-[70px_1fr_70px]'>
                    <div className='h-full w-full flex items-center justify-center'>
                      <p className='text-2xl font-medium leading-normal text-white md:text-xl'>{(Number(totalEmission) > 1000) ? (Number(totalEmission/1000)).toFixed(0) : Number(totalEmission).toFixed(0)}<span className='text-[12px] text-slate-300'>{(Number(totalEmission) > 1000) ? 't' : 'kg'}</span></p>
                    </div>
                    <div className='h-full w-full flex justify-center flex-col'>
                      <div className='h-fit w-full flex items-center justify-center gap-[5px]'>
                        <div className='hidden sm:flex'><FaArrowTrendDown size={12} className='fill-sky-300'/></div>
                        <p className='text-[12px] leading-none text-sky-300 sm:hidden'>Reduction</p>
                      </div>
                      <div className='h-fit w-full flex items-center'>
                        <div className='h-[2px] w-full bg-gradient-to-r from-slate-800 to-sky-400'/>
                        <div className='h-0 w-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-sky-400'/>
                      </div>
                    </div>
                    <div className='h-full w-full flex items-center justify-center'>
                      <p className='text-2xl text-sky-400 font-medium leading-normal md:text-xl'>{(Number(totalEmission) > 1000) ? (Number(totalEmission/1000)).toFixed(0) : (Number(totalEmission)-totalReduction.number).toFixed(0)}<span className='text-[12px] text-sky-300'>{(Number(totalEmission) > 1000) ? 't' : 'kg'}</span></p>
                    </div>
                  </div>
                  
                  <div className='h-fit w-full flex flex-row items-center justify-end gap-[10px] md:flex-col md:items-end md:justify-start'>
                    <div className='grid grid-cols-[100px_100px] gap-[10px] md:grid-cols-2'>
                      <FormControl style={{ width: "100%" }}>
                        <ThemeProvider theme={createTheme({palette:{mode: 'dark'}})}>
                          <TextField label="%" placeholder='100' disabled={reductionLoading} type='number' size='small' inputMode='numeric' value={totalReduction.percent}
                            onChange={e => { setTotalReduction({percent: e.target.value, number: ((totalEmission*e.target.value)/100).toFixed(2)}); setTotalReductionRecent('percent'); }}
                            onKeyDown={e => (e.key === 'Enter' && isTotalValueChanged() && !reductionLoading) && actionPlanAPI({ category: 'Total', percent: Number(e.target.value), value: 0, setRefresh, setReductionLoading, navigate })}
                          />
                        </ThemeProvider>
                      </FormControl>
                      <FormControl style={{ width: "100%" }}>
                        <ThemeProvider theme={createTheme({palette:{mode: 'dark'}})}>
                          <TextField label="Value" placeholder='100' disabled={reductionLoading} type='number' size='small' inputMode='numeric' value={totalReduction.number}
                            onChange={e => { setTotalReduction({percent: (100 - (totalEmission - e.target.value)/totalEmission*100).toFixed(2), number: e.target.value}); setTotalReductionRecent('value'); }}
                            onKeyDown={e => (e.key === 'Enter' && isTotalValueChanged() && !reductionLoading) && actionPlanAPI({ category: 'Total', percent: 0, value: Number(e.target.value), setRefresh, setReductionLoading , navigate})}
                          />
                        </ThemeProvider>
                      </FormControl>
                    </div>
                    <div className='grid grid-cols-[40px_40px] gap-[10px]'>
                      <div className='h-full w-full flex items-center justify-center'>
                        <Tooltip title='Confirm Inputs' arrow>
                          <div
                            className={`w-[40px] h-[40px] ${isTotalValueChanged() ? 'bg-green-500 cursor-pointer hover:opacity-50' : 'bg-slate-700 cursor-not-allowed'} rounded-full flex items-center justify-center duration-200`}
                            onClick={() => {
                              if (isTotalValueChanged() && !reductionLoading) {
                                if (totalReductionRecent === 'percent') {
                                  actionPlanAPI({ category: 'Total', percent: Number(totalReduction.percent), value: 0, setRefresh, setReductionLoading, navigate })
                                } else {
                                  actionPlanAPI({ category: 'Total', percent: 0, value: Number(totalReduction.number), setRefresh, setReductionLoading , navigate})
                                }
                              } else {
                                return
                              }
                            }}
                          >
                            {reductionLoading ? (
                              <div className='h-[30px] w-[30px] rounded-full border-[3px] border-transparent border-y-[3px] border-y-white animate-spin'/>
                            ) : (
                              <FaCheck size={14} className={isTotalValueChanged() ? 'fill-white' : 'fill-slate-400'}/>
                            )}
                          </div>
                        </Tooltip>
                      </div>
                      <div className='h-full w-full flex items-center justify-center'>
                        <Tooltip title='Delete Inputs' arrow>
                          <div
                            className={`w-[40px] h-[40px] ${(totalReduction.percent > 0 || totalReduction.value > 0) ? 'bg-red-400 cursor-pointer hover:opacity-50' : 'bg-slate-700 cursor-not-allowed'} rounded-full flex items-center justify-center duration-200`}
                            onClick={() => {
                              if ((totalReduction.percent > 0 || totalReduction.value > 0) && !reductionLoading) {
                                actionPlanAPI({ category: 'Total', percent: 0, value: 0, setRefresh, setReductionLoading , navigate})
                              } else {
                                return
                              }
                            }}
                          >
                            {reductionLoading ? (
                              <div className='h-[30px] w-[30px] rounded-full border-[3px] border-transparent border-y-[3px] border-y-white animate-spin'/>
                            ) : (
                              <FaTrashAlt size={14} className={`${(totalReduction.percent > 0 || totalReduction.value > 0) ? 'fill-white' : 'fill-slate-400'} duration-200`}/>
                            )}
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              {targetsList.map((cat, i) => (
                <div key={i}>
                  <ReductionComponent cat={cat}/>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* pie charts */}
        <div className='h-[500px] w-full grid grid-cols-2 gap-[20px] xxl:grid-cols-1 xxl:h-fit'>
          <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl xxl:h-[500px] md:rounded-none'>
            <p className='font-bold'>Emissions by Category {'( Total ' + totalEmission + ' kg )'}</p>
            <div className='h-full w-full xxl:h-[500px]'>
              <ReactEChart option={emissionsPieChartOption} notMerge={true} showLoading={loading} style={{height: '100%', width: '100%'}}/>
            </div>
          </div>
          <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl xxl:h-[500px] md:rounded-none'>
            <p className='font-bold'>Emissions after reductions {findTotalReducedEmission() ? '( Total ' + findTotalReducedEmission() + ' kg )' : ''}</p>
            <div className='h-full w-full xxl:h-[500px]'>
              <ReactEChart option={newEmissionsPieChartOption} notMerge={true} showLoading={loading} style={{height: '100%', width: '100%'}}/>
            </div>
          </div>
        </div>

        {/* suggestions */}
        {(data.target && data.target.length > 0) ? (
          <div className='h-fit w-full grid gap-[20px]'>
            <div className='h-fit w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl overflow-y-scroll hide-scrollbar md:rounded-none'>
              <p className='font-bold'>Suggestions to achieve your goals</p>
              <div className='h-fit max-h-[500px] w-full flex flex-col gap-[10px] overflow-y-scroll fancy-scrollbar'>
                {data.target.filter(f => f.category !== 'Total' && f.category !== undefined && f.category !== null).map((e, i) => {
                  const plans = reducePlans.find(f => f.category === e.category)
                  return (
                    <div className='h-fit w-full p-[10px] grid grid-cols-1 border border-slate-200 rounded-lg gap-[10px]' key={i}>
                      <div className='h-fit w-full flex flex-col gap-[5px]'>
                        <p className='font-semibold underline underline-offset-2'>{e.category}</p>
                        {plans.reduce_plan ? (
                          plans.reduce_plan.map((m, index) => (
                            <div className='h-fit grid grid-cols-[30px_1fr]' key={index}>
                              <div className='h-full w-full flex justify-center'>
                                {index + 1}.
                              </div>
                              <div className='h-fit w-full'>
                                <p className='font-medium'>{m.plan}</p>
                                <p className='text-sm text-slate-500'>{m.description}</p>
                              </div>
                            </div>
                          )
                        )) : (<></>)}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ) : (<></>)}
      </div>
    </div>
  )
}

export default ActionPlan