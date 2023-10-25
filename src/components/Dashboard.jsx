import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'
import ReactEChart from 'echarts-for-react'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import { BiSolidEditAlt } from 'react-icons/bi'
import { ImCancelCircle } from 'react-icons/im'

import { categories, unit_types } from '../local'
import { addDataAPI, deleteDataAPI, updateDataAPI } from '../hooks/functions'
import useFetchData from '../hooks/useFetchData'

const Dashboard = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()
  const [formDetails, setFormDetails] = useState({ date: moment().format('YYYY-MM'), sector: '', active_id: '', category: '', amount: 0, unit: '', type: ''  })
  const [formOptions, setFormOptions] = useState({ sector: categories.map(e => e.sector), category: [], unit: [] })
  const [error, setError] = useState('')
  const [formLoading, setFormLoading] = useState(false)
  const [displayForm, setDisplayForm] = useState(false)
  const [displayFormEdit, setDisplayFormEdit] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [userID, setUserID] = useState('')
  
  const fetch = useFetchData({ refresh })
  const [loading, data, chartCF, chartSector] = fetch

  useEffect(() => {
    setCurrentRoute('dashboard')
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
    let finding = categories.find(f => f.sector === formDetails.sector)
    if (finding) {
      setFormOptions(p => {return{...p, category: finding.categories.map(e => e.category)}})
    }
  }, [formDetails.sector])

  useEffect(() => {
    let finding = categories.find(f => f.sector === formDetails.sector)
    if (finding) {
      let tempUnit = finding?.categories?.find(f => f.category === formDetails.category)
      let tempFinal = unit_types.find(f => f.unit_type === tempUnit?.unit)?.units[`${tempUnit.unit.toLowerCase()}_unit`]
      setFormOptions(p => {return{...p, unit: tempFinal ? tempFinal : []}})
      setFormDetails(p => {return{...p, active_id: tempUnit?.id, type: tempUnit?.unit}})
    }
  }, [formDetails.category])

  const footprintMixedChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    toolbox: {
      feature: {
        saveAsImage: { show: true }
      }
    },
    legend: {
      top: '0',
      left: 'center',
      width: '90%',
      textStyle: {
        fontSize: 10,
        width: 50,
        ellipsis: '...',
        overflow: 'truncate'
      }
    },
    xAxis: [
      {
        type: 'category',
        data: data.by_date ? data.by_date.map(e => e.date) : []
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: (chartCF.sectors.length > 0 && chartCF.data.length > 0) ? (
      chartCF.sectors.map(e => {
        return {
          name: e,
          type: 'bar',
          barMaxWidth: 100,
          stack: 'Sector',
          emphasis: {
            focus: 'series'
          },
          data: chartCF.data.map(m => Number(m[e]).toFixed(0))
        }
      })
    ) : []
  };

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
        radius: ['40%', '60%'],
        data: (chartSector.length > 0) ? chartSector : [],
        emphasis: {
          itemStyle: {
            shadowBlur: 5,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          label: {
            show: true,
            fontWeight: 'bold'
          }
        }
      }
    ]
  };

  const gasRadarChartOption = {
    tooltip: {
      trigger: 'item',
    },
    toolbox: {
      feature: {
        saveAsImage: { show: true }
      }
    },
    label: {
      show: false,
    },
    radar: {
      indicator: [
        // { name: 'co2e', max: data.by_gases ? Object.values(data.by_gases).sort((a, b) => b-a)[0] : 1000, color: '#000' },
        { name: 'ch4', max: data.by_gases ? Object.values(data.by_gases).sort((a, b) => b-a)[0] : 1000, color: '#000' },
        { name: 'co2', max: data.by_gases ? Object.values(data.by_gases).sort((a, b) => b-a)[0] : 1000, color: '#000' },
        { name: 'co2_other', max: data.by_gases ? Object.values(data.by_gases).sort((a, b) => b-a)[0] : 1000, color: '#000' },
        { name: 'n2o', max: data.by_gases ? Object.values(data.by_gases).sort((a, b) => b-a)[0] : 1000, color: '#000' },
      ]
    },
    series: [
      {
        name: 'Constituent Gases',
        type: 'radar',
        data: [
          {
            value: data.by_gases ? [
              // Number(data.by_gases.co2e_total).toFixed((data.by_gases.co2e_total < 1) ? 2 : 0),
              Number(data.by_gases.ch4).toFixed((data.by_gases.ch4 < 1) ? 2 : 0),
              Number(data.by_gases.co2).toFixed((data.by_gases.co2 < 1) ? 2 : 0),
              Number(data.by_gases.co2_other).toFixed((data.by_gases.co2_other < 1) ? 2 : 0),
              Number(data.by_gases.n2o).toFixed((data.by_gases.n2o < 1) ? 2 : 0),
            ] : [],
            name: 'Constituent Gases'
          }
        ]
      }
    ]
  };

  // form submit
  const handleAdd = () => {
    if (formDetails.date === '' || formDetails.sector === '' || formDetails.active_id === '' || formDetails.category === '' || formDetails.amount <= 0 || formDetails.unit === '' || formDetails.type === '') {
      setError('Please fill up the whole form. Amount should be more than 0.')
    } else {
      setError('')
      addDataAPI({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, setDisplayForm, navigate })
    }
  }

  // form submit
  const handleEdit = () => {
    if (formDetails.date === '' || formDetails.sector === '' || formDetails.active_id === '' || formDetails.category === '' || formDetails.amount <= 0 || formDetails.unit === '' || formDetails.type === '') {
      setError('Please fill up the whole form. Amount should be more than 0.')
    } else {
      setError('')
      updateDataAPI({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, userID, setDisplayFormEdit, navigate })
    }
  }

  return (
    <>
      {/* form */}
      <div className={`fixed z-50 top-0 ${displayForm ? 'h-full w-full scale-100 opacity-100' : 'h-0 w-0 scale-0 opacity-0'} min-h-fit duration-500 bg-white/80 backdrop-blur-sm grid items-center overflow-y-scroll hide-scrollbar`}>
        <div className='h-fit w-full p-[20px] flex justify-center'>
          <div className='h-fit w-full max-w-[400px] bg-white p-[20px] flex flex-col gap-[5px] rounded-xl border border-slate-300 shadow-md'>
            <div className='h-fit w-full flex justify-between'>
              <p className='font-medium'>Estimation</p>
              <ImCancelCircle size={24} className='fill-red-400 cursor-pointer hover:opacity-50' onClick={() => setDisplayForm(false)}/>
            </div>
            <p className='text-sm text-slate-500'>Calculate total estimated emissions produced for a particular activity, in kgCO2e, using the available emission factors.</p>
            {(error === '') ? <></> : (<p className='text-sm text-red-400'>{error}</p>)}
            <p className='text-slate-500'>Sector:</p>
            <select value={formDetails.sector} onKeyDown={e => (e.key === 'Enter') && handleAdd()} onChange={e => setFormDetails(p => {return{...p, sector: e.target.value}})} className='h-[40px] w-full border border-slate-300 rounded-md px-[5px]'>
              <option value=''>Choose...</option>
              {formOptions.sector.map((e, i) => (
                <option key={i} value={e}>{e}</option>
              ))}
            </select>
            <p className='text-slate-500'>Category:</p>
            <select value={formDetails.category} onKeyDown={e => (e.key === 'Enter') && handleAdd()} onChange={e => setFormDetails(p => {return{...p, category: e.target.value}})} disabled={(formDetails.sector === '') ? true : false} className='h-[40px] w-full border border-slate-300 rounded-md px-[5px]'>
              <option value=''>Choose...</option>
              {formOptions.category.map((e, i) => (
                <option key={i} value={e}>{e}</option>
              ))}
            </select>
            <p className='text-slate-500'>Amount:</p>
            <div className='h-fit w-full grid grid-cols-[1fr_100px] gap-[10px] sm:grid-cols-[1fr_80px]'>
              <input value={formDetails.amount} onKeyDown={e => (e.key === 'Enter') && handleAdd()} onChange={e => setFormDetails(p => {return{...p, amount: e.target.value}})} disabled={(formDetails.category === '') ? true : false} type='number' placeholder='1000' className='h-[40px] w-full border border-slate-300 rounded-md px-[10px]'/>
              <select value={formDetails.unit} onKeyDown={e => (e.key === 'Enter') && handleAdd()} onChange={e => setFormDetails(p => {return{...p, unit: e.target.value}})} disabled={(formDetails.category === '') ? true : false} className='h-[40px] w-full border border-slate-300 rounded-md px-[5px]'>
                <option value=''>Choose...</option>
                {formOptions.unit.map((e, i) => (
                  <option key={i} value={e}>{e}</option>
                ))}
              </select>
            </div>
            <p className='text-slate-500'>Date:</p>
            <input value={formDetails.date} onKeyDown={e => (e.key === 'Enter') && handleAdd()} onChange={e => setFormDetails(p => {return{...p, date: moment(e.target.value).format('YYYY-MM')}})} type='month' className='h-[40px] w-full border border-slate-300 rounded-md px-[10px]'/>
            <button onKeyDown={e => (e.key === 'Enter') && handleAdd()} onClick={() => handleAdd()} disabled={formLoading} className='h-[40px] w-full bg-emerald-400 text-white font-semibold rounded-md cursor-pointer px-[10px] flex items-center justify-center mt-[10px] duration-200 hover:opacity-50 focus:outline-none focus-visible:opacity-50'>
              {formLoading ? (
                <div className='h-[30px] w-[30px] rounded-full border-[5px] border-emerald-100 border-t-[5px] border-t-white animate-spin'/>
              ) : 'ADD'}
            </button>
          </div>
        </div>
      </div>

      {/* form edit */}
      <div className={`fixed z-50 top-0 ${displayFormEdit ? 'h-full w-full scale-100 opacity-100' : 'h-0 w-0 scale-0 opacity-0'} min-h-fit duration-500 bg-white/80 backdrop-blur-sm grid items-center overflow-y-scroll hide-scrollbar`}>
        <div className='h-fit w-full p-[20px] flex justify-center'>
          <div className='h-fit w-full max-w-[400px] bg-white p-[20px] flex flex-col gap-[5px] rounded-xl border border-slate-300 shadow-md'>
            <div className='h-fit w-full flex justify-between'>
              <p className='font-medium'>Estimation</p>
              <ImCancelCircle size={24} className='fill-red-400 cursor-pointer hover:opacity-50' onClick={() => setDisplayFormEdit(false)}/>
            </div>
            <p className='text-sm text-slate-500'>Calculate total estimated emissions produced for a particular activity, in kgCO2e, using the available emission factors.</p>
            {(error === '') ? <></> : (<p className='text-sm text-red-400'>{error}</p>)}
            <p className='text-slate-500'>Sector:</p>
            <select value={formDetails.sector} onKeyDown={e => (e.key === 'Enter') && handleEdit()} onChange={e => setFormDetails(p => {return{...p, sector: e.target.value}})} className='h-[40px] w-full border border-slate-300 rounded-md px-[5px]'>
              <option value=''>Choose...</option>
              {formOptions.sector.map((e, i) => (
                <option key={i} value={e}>{e}</option>
              ))}
            </select>
            <p className='text-slate-500'>Category:</p>
            <select value={formDetails.category} onKeyDown={e => (e.key === 'Enter') && handleEdit()} onChange={e => setFormDetails(p => {return{...p, category: e.target.value}})} disabled={(formDetails.sector === '') ? true : false} className='h-[40px] w-full border border-slate-300 rounded-md px-[5px]'>
              <option value=''>Choose...</option>
              {formOptions.category.map((e, i) => (
                <option key={i} value={e}>{e}</option>
              ))}
            </select>
            <p className='text-slate-500'>Amount:</p>
            <div className='h-fit w-full grid grid-cols-[1fr_100px] gap-[10px] sm:grid-cols-[1fr_80px]'>
              <input value={formDetails.amount} onKeyDown={e => (e.key === 'Enter') && handleEdit()} onChange={e => setFormDetails(p => {return{...p, amount: e.target.value}})} disabled={(formDetails.category === '') ? true : false} type='number' placeholder='1000' className='h-[40px] w-full border border-slate-300 rounded-md px-[10px]'/>
              <select value={formDetails.unit} onKeyDown={e => (e.key === 'Enter') && handleEdit()} onChange={e => setFormDetails(p => {return{...p, unit: e.target.value}})} disabled={(formDetails.category === '') ? true : false} className='h-[40px] w-full border border-slate-300 rounded-md px-[5px]'>
                <option value=''>Choose...</option>
                {formOptions.unit.map((e, i) => (
                  <option key={i} value={e}>{e}</option>
                ))}
              </select>
            </div>
            <p className='text-slate-500'>Date:</p>
            <input value={formDetails.date} onKeyDown={e => (e.key === 'Enter') && handleEdit()} onChange={e => setFormDetails(p => {return{...p, date: moment(e.target.value).format('YYYY-MM')}})} type='month' className='h-[40px] w-full border border-slate-300 rounded-md px-[10px]'/>
            <button onKeyDown={e => (e.key === 'Enter') && handleEdit()} onClick={() => handleEdit()} disabled={formLoading} className='h-[40px] w-full bg-emerald-400 text-white font-semibold rounded-md cursor-pointer px-[10px] flex items-center justify-center mt-[10px] duration-200 hover:opacity-50 focus:outline-none focus-visible:opacity-50'>
              {formLoading ? (
                <div className='h-[30px] w-[30px] rounded-full border-[5px] border-emerald-100 border-t-[5px] border-t-white animate-spin'/>
              ) : 'EDIT'}
            </button>
          </div>
        </div>
      </div>

      {/* dashboard */}
      <div className='h-fit min-h-[calc(100%-60px)] w-full bg-slate-100 flex justify-center'>
        <div className='h-fit w-full max-w-[1700px] py-[20px] px-[20px] flex flex-col gap-[20px] md:px-0'>
          {/* top */}
          <div className='h-fit w-full flex items-center justify-between gap-[10px] md:px-[20px]'>
            <p className='text-xl font-semibold sm:text-base'>Dashboard</p>
            <button onClick={() => setDisplayForm(true)} className='h-[40px] w-fit bg-emerald-400 text-white font-semibold rounded-md cursor-pointer px-[10px] flex items-center justify-center duration-200 hover:opacity-50 focus:outline-none focus-visible:opacity-50 sm:w-full md:h-[40px]'><FaPlus size={16}/>ADD</button>
          </div>

          {/* first bar chart */}
          <div className='h-fit w-full grid grid-cols-[300px_1fr] gap-[20px] xxl:grid-cols-1'>
            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl xxl:h-fit md:rounded-none'>
              <p className='font-medium'>Emissions by Sectors</p>
              <div className='h-fit w-full grid grid-flow-row gap-[10px]'>
                {(chartSector.length > 0) ? (
                  chartSector.map((e, i) => (
                    <div className='h-full w-full flex items-center justify-between py-[10px] text-sm border-b border-b-slate-300 gap-[5px]' key={i}>
                      <p className='text-slate-500'>{e.name}</p>
                      <p className='font-semibold'>{Number(e.value).toFixed(0)}kg</p>
                    </div>
                  ))
                ) : (
                  <div className='h-full w-full flex items-center justify-between text-sm gap-[5px]'>
                    <p className='text-slate-500'>No Data yet</p>
                  </div>
                )}
              </div>
            </div>

            <div className='h-fit w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl overflow-y-scroll hide-scrollbar md:rounded-none'>
              <div className='h-fit w-full flex items-center justify-between'>
                {data?.by_gases?.co2e_total ? (
                  <p className='font-medium'>Carbon Footprint {'(' + (data.by_gases.co2e_total*1).toFixed(0) +' kg)'}</p>
                ) : (
                  <p className='font-medium'>Carbon Footprint</p>
                )}
              </div>
              <div className='h-[500px] w-full'>
                <ReactEChart option={footprintMixedChartOption} showLoading={loading} style={{height: '100%', width: '100%', minWidth: '420px'}}/>
              </div>
            </div>
          </div>

          {/* second bar chart */}
          <div className='h-fit w-full grid grid-cols-[400px_1fr_400px] gap-[20px] xxxl:grid-cols-2 lg:grid-cols-1'>
            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl md:rounded-none'>
              <p className='font-medium'>Emissions by Sectors</p>
              <div className='h-[500px] w-full'>
                <ReactEChart option={emissionsPieChartOption} showLoading={loading} style={{height: '100%', width: '100%'}}/>
              </div>
            </div>

            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl overflow-y-scroll hide-scrollbar xxxl:hidden md:rounded-none'>
              <p className='font-medium'>Scope emissions by each</p>
              <div className='h-full max-h-[500px] w-full flex flex-col gap-[10px] overflow-y-scroll fancy-scrollbar'>
                {data.data ? (
                  data.data.map((e, i) => (
                    <div className='h-fit w-full p-[10px] grid grid-cols-[1fr_50px] text-sm border border-slate-200 rounded-lg gap-[10px]' key={i}>
                      <div className='h-fit w-full flex flex-col text-sm gap-[5px]'>
                        <p className='text-base leading-tight'>{e.category} <span className='text-sm text-slate-500'>"{e.sector}"</span> <span className='text-sm text-slate-500 font-semibold'>{'('}{moment(e.date).format('MMMM YYYY')}{')'}</span></p>
                        <div className='w-full grid grid-cols-2'>
                          <div className='h-fit w-full flex flex-col'>
                            <p className='text-slate-500'>Amount</p>
                            <p className='text-base font-semibold'>{Number(e.activity_data.activity_value).toFixed(0)} {e.activity_data.activity_unit}</p>
                          </div>
                          <div className='h-fit w-full flex flex-col'>
                            <p className='text-slate-500'>Emission</p>
                            <p className='text-base font-semibold'>{Number(e.co2e).toFixed(0)} {e.co2e_unit}</p>
                          </div>
                        </div>
                      </div>
                      <div className='h-full w-full grid grid-rows-2 gap-[5px]'>
                        <div className='h-full w-full flex items-center justify-center bg-green-50 border border-green-200 rounded-md cursor-pointer hover:opacity-50' onClick={() => { setFormDetails({ date: moment(e.date).format('YYYY-MM'), sector: e.sector, active_id: '', category: e.category, amount: e.activity_data.activity_value, unit: '', type: '' }); setDisplayFormEdit(true); setUserID(e.id); }}>
                          {formLoading ? (
                            <div className='h-[30px] w-[30px] rounded-full border-[5px] border-emerald-100 border-t-[5px] border-t-white animate-spin'/>
                          ) : (
                            <BiSolidEditAlt size={20} className='fill-green-500'/>
                          )}
                        </div>
                        <div className='h-full w-full flex items-center justify-center bg-red-50 border border-red-100 rounded-md cursor-pointer hover:opacity-50' onClick={() => deleteDataAPI({ setFormLoading, setRefresh, id: e.id, navigate })}>
                          {formLoading ? (
                            <div className='h-[30px] w-[30px] rounded-full border-[5px] border-red-100 border-t-[5px] border-t-white animate-spin'/>
                          ) : (
                            <FaTrashAlt size={16} className='fill-red-400'/>
                          )}
                        </div>
                      </div>
                    </div> 
                  ))
                ) : (
                  <p className='text-slate-500'>No Data yet</p>
                )}
              </div>
            </div>

            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl md:rounded-none'>
              <p className='font-medium'>Constituent Gases</p>
              <div className='h-[350px] w-full'>
                <ReactEChart option={gasRadarChartOption} showLoading={loading} style={{height: '100%', width: '100%'}}/>
              </div>
              <div className='h-fit w-full flex flex-col'>
                <div className='w-full py-[5px] flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>co2e</p>
                  <p className='font-semibold'>{data?.by_gases?.co2e_total ? (data.by_gases.co2e_total*1).toFixed((data.by_gases.co2e_total < 1) ? 2: 0) : '0'}kg</p>
                </div>
                <div className='w-full py-[5px] flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>ch4</p>
                  <p className='font-semibold'>{data?.by_gases?.ch4 ? (data.by_gases.ch4*1).toFixed((data.by_gases.ch4 < 1) ? 2: 0) : '0'}kg</p>
                </div>
                <div className='w-full py-[5px] flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>co2</p>
                  <p className='font-semibold'>{data?.by_gases?.co2 ? (data.by_gases.co2*1).toFixed((data.by_gases.co2 < 1) ? 2: 0) : '0'}kg</p>
                </div>
                <div className='w-full py-[5px] flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>n2o</p>
                  <p className='font-semibold'>{data?.by_gases?.n2o ? (data.by_gases.n2o*1).toFixed((data.by_gases.n2o < 1) ? 2: 0) : '0'}kg</p>
                </div>
                <div className='w-full py-[5px] flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>co2_other</p>
                  <p className='font-semibold'>{data?.by_gases?.co2_other ? (data.by_gases.co2_other*1).toFixed((data.by_gases.co2_other < 1) ? 2: 0) : '0'}kg</p>
                </div>
              </div>
            </div>
          </div>

          {/* after max width chart */}
          <div className='h-fit w-full hidden gap-[20px] xxxl:grid'>
            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl overflow-y-scroll hide-scrollbar md:rounded-none'>
              <p className='font-medium'>Scope emissions by each</p>
              <div className='h-full max-h-[500px] w-full flex flex-col gap-[10px] overflow-y-scroll fancy-scrollbar'>
                {data.data ? (
                  data.data.map((e, i) => (
                    <div className='h-fit w-full p-[10px] grid grid-cols-[1fr_50px] text-sm border border-slate-200 rounded-lg gap-[10px]' key={i}>
                      <div className='h-fit w-full flex flex-col text-sm gap-[5px]'>
                        <p className='text-base leading-tight'>{e.category} <span className='text-sm text-slate-500'>"{e.sector}"</span> <span className='text-sm text-slate-500 font-semibold'>{'('}{moment(e.date).format('MMMM YYYY')}{')'}</span></p>
                        <div className='w-full grid grid-cols-2'>
                          <div className='h-fit w-full flex flex-col'>
                            <p className='text-slate-500'>Category</p>
                            <p className='text-base font-semibold'>{Number(e.activity_data.activity_value).toFixed(0)} {e.activity_data.activity_unit}</p>
                          </div>
                          <div className='h-fit w-full flex flex-col'>
                            <p className='text-slate-500'>Emission</p>
                            <p className='text-base font-semibold'>{Number(e.co2e).toFixed(0)} {e.co2e_unit}</p>
                          </div>
                        </div>
                      </div>
                      <div className='h-full w-full grid grid-rows-2 gap-[5px]'>
                        <div className='h-full w-full flex items-center justify-center bg-green-50 border border-green-200 rounded-md cursor-pointer hover:opacity-50' onClick={() => { setFormDetails({ date: moment(e.date).format('YYYY-MM'), sector: e.sector, active_id: '', category: e.category, amount: e.activity_data.activity_value, unit: '', type: '' }); setDisplayFormEdit(true); setUserID(e.id); }}>
                          {formLoading ? (
                            <div className='h-[30px] w-[30px] rounded-full border-[5px] border-emerald-100 border-t-[5px] border-t-white animate-spin'/>
                          ) : (
                            <BiSolidEditAlt size={20} className='fill-green-500'/>
                          )}
                        </div>
                        <div className='h-full w-full flex items-center justify-center bg-red-50 border border-red-100 rounded-md cursor-pointer hover:opacity-50' onClick={() => deleteDataAPI({ setFormLoading, setRefresh, id: e.id, navigate })}>
                          {formLoading ? (
                            <div className='h-[30px] w-[30px] rounded-full border-[5px] border-red-100 border-t-[5px] border-t-white animate-spin'/>
                          ) : (
                            <FaTrashAlt size={16} className='fill-red-400'/>
                          )}
                        </div>
                      </div>
                    </div> 
                  ))
                ) : (
                  <p className='text-slate-500'>No Data yet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard