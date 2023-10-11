import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'
import ReactEChart from 'echarts-for-react'

import { actionPlanAPI } from '../hooks/functions'
import { categories } from '../local'
import useFetchData from '../hooks/useFetchData'

const ActionPlan = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()
  const [actionCategories, setActionCategories] = useState([])
  const [resultChart, setResultChart] = useState([])
  const [totalEmission, setTotalEmission] = useState(0)
  const [totalReduction, setTotalReduction] = useState({ percent: 0, number: 0 })
  const [reductionLoading, setReductionLoading] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [reducePlans, setReducePlans] = useState([])
  
  const fetch = useFetchData({ refresh })
  const [loading, data, chartSector] = fetch

  useEffect(() => {
    setCurrentRoute('actionplan')
  }, [])

  useEffect(() => {
    if (loginStatus.login === false) {
      navigate('/')
    }
  }, [loginStatus.login])

  useEffect(() => {
    if (loginStatus.plan === 'none') {
      navigate('/pricing')
    }
  }, [loginStatus.plan])

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
            } else {
              setTotalReduction({ percent: (100 - (total - temp.value)/total*100).toFixed(2), number: temp.value })
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
                return { name: e.name, value: (temp.percent > 0) ? (Number(e.value)-(Number(e.value)*temp.percent/100)).toFixed(2) : (Number(e.value)-temp.value).toFixed(2) }
            } else {
                return { name: e.name, value: Number(e.value).toFixed(2) }
                
            }
        })

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
    const [reduction, setReduction] = useState({ percent: 0, number: 0 })

    useEffect(() => {
      if (data.target) {
        const temp = data.target.find(f => f.category === cat.name)
        if (temp) {
          if (temp.percent > 0) {
            setReduction({ percent: temp.percent, number: ((Number(cat.value)*temp.percent)/100).toFixed(2) })
          } else {
            setReduction({ percent: (100 - (Number(cat.value) - temp.value)/Number(cat.value)*100).toFixed(2), number: temp.value })
          }
        }
      }
    }, [data])

    return (
      <div className='h-fit w-full grid grid-cols-[1fr_100px_100px] gap-[10px] items-center border-b border-b-slate-300 py-[5px] md:grid-cols-[1fr_50px_50px]'>
        <div>
          <p className='md:text-sm'>{cat.name}</p>
          <p className='font-medium md:text-sm'>{cat.value} kg</p>
        </div>
        <div>
            <p className='text-sm'>Percent</p>
            <input value={reduction.percent} disabled={reductionLoading} type="number" placeholder='10' className={`h-[30px] w-full px-[5px] border-2 border-slate-300 rounded-md bg-white focus:outline-none focus-visible:border-slate-600 md:text-sm`}
                onChange={e => setReduction({percent: e.target.value, number: ((cat.value*e.target.value)/100).toFixed(2)})}
                onBlur={e => {(e.target.value) ? actionPlanAPI({ category: cat.name, percent: e.target.value*1, value: 0, setRefresh, setReductionLoading }) : actionPlanAPI({ category: cat.name, percent: 0, value: 0, setRefresh, setReductionLoading });} }
            />
        </div>
        <div>
            <p className='text-sm'>Value</p>
            <input value={reduction.number} disabled={reductionLoading} type="number" placeholder='10' className={`h-[30px] w-full px-[5px] border-2 border-slate-300 rounded-md bg-white focus:outline-none focus-visible:border-slate-600 md:text-sm`}
                onChange={e => setReduction({percent: (100 - (cat.value - e.target.value)/cat.value*100).toFixed(2), number: e.target.value})}
                onBlur={e => {(e.target.value) ? actionPlanAPI({ category: cat.name, percent: 0, value: e.target.value*1, setRefresh, setReductionLoading }) : actionPlanAPI({ category: cat.name, percent: 0, value: 0, setRefresh, setReductionLoading });} }
            />
        </div>
    </div>
    )
  }

  const findTotalReduction = () => {
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

    return result
  }

  return (
    <div className='h-fit min-h-[calc(100%-60px)] w-full bg-slate-200 flex justify-center'>
        <div className='h-fit w-full max-w-[1700px] p-[20px] flex flex-col gap-[20px]'>
            {/* top */}
            <p className='text-xl font-semibold sm:text-base'>Action Plan</p>

            {/* first pie chart */}
            <div className='h-fit w-full grid grid-cols-2 gap-[20px] xxl:grid-cols-1'>
                <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
                    <p className='font-medium'>Emissions by Category</p>
                    <div className='h-full w-full xxl:h-[500px]'>
                        <ReactEChart option={emissionsPieChartOption} style={{height: '100%', width: '100%'}}/>
                    </div>
                </div>

                <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
                    <p className='font-medium'>Total Emissions {(actionCategories.length > 0) ? '( ' + totalEmission.toFixed(0) + ' kg )' : ''}</p>
                    <p className='font-medium'>Reduction Goals</p>
                    <div className='h-[400px] w-full flex flex-col overflow-y-scroll fancy-scrollbar'>
                        <div className='h-fit w-full grid grid-cols-[1fr_100px_100px] gap-[10px] items-center border-b border-b-slate-300 py-[5px] md:grid-cols-[1fr_50px_50px]'>
                            <p className='md:text-sm'>Total</p>
                            <div>
                                <p className='text-sm'>Percent</p>
                                <input value={totalReduction.percent} disabled={reductionLoading} type="number" placeholder='10' className={`h-[30px] w-full px-[5px] border-2 border-slate-300 rounded-md bg-white focus:outline-none focus-visible:border-slate-600 md:text-sm`}
                                    onChange={e => setTotalReduction({percent: e.target.value, number: ((totalEmission*e.target.value)/100).toFixed(2)})}
                                    onBlur={e => {(e.target.value) ? actionPlanAPI({ category: 'Total', percent: e.target.value*1, value: 0, setRefresh, setReductionLoading }) : actionPlanAPI({ category: 'Total', percent: 0, value: 0, setRefresh, setReductionLoading });} }
                                />
                            </div>
                            <div>
                                <p className='text-sm'>Value</p>
                                <input value={totalReduction.number} disabled={reductionLoading} type="number" placeholder='10' className={`h-[30px] w-full px-[5px] border-2 border-slate-300 rounded-md bg-white focus:outline-none focus-visible:border-slate-600 md:text-sm`}
                                    onChange={e => setTotalReduction({percent: (100 - (totalEmission - e.target.value)/totalEmission*100).toFixed(2), number: e.target.value})}
                                    onBlur={e => {(e.target.value) ? actionPlanAPI({ category: 'Total', percent: 0, value: e.target.value*1, setRefresh, setReductionLoading }) : actionPlanAPI({ category: 'Total', percent: 0, value: 0, setRefresh, setReductionLoading });} }
                                />
                            </div>
                        </div>
                        {actionCategories.map((cat, i) => (
                          <div key={i}>
                            <ReductionComponent cat={cat}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* second pie chart */}
            {(data.target && data.target.length > 0) ? (
              <div className='h-fit w-full grid grid-cols-1 gap-[20px]'>
                  <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
                      <p className='font-medium'>Emissions after reductions {findTotalReduction() ? '( Total ' + findTotalReduction() + ' kg )' : ''}</p>
                      <div className='h-[500px] w-full'>
                          <ReactEChart option={newEmissionsPieChartOption} style={{height: '100%', width: '100%'}}/>
                      </div>
                  </div>
              </div>
            ) : (<></>)}

            {/* after max width chart */}
            {(data.target && data.target.length > 0) ? (
              <div className='h-fit w-full grid gap-[20px]'>
                  <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl overflow-y-scroll hide-scrollbar'>
                      <p className='font-medium'>Suggestions to achieve your goals</p>
                      <div className='h-full max-h-[500px] w-full flex flex-col gap-[10px] overflow-y-scroll fancy-scrollbar'>
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