import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'
import ReactEChart from 'echarts-for-react'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import { BiSolidEditAlt } from 'react-icons/bi'
import { ImCancelCircle } from 'react-icons/im'

import { categories, unit_types } from '../local'
import { addDataAPI } from '../hooks/functions'
import useFetchData from '../hooks/useFetchData'

const Dashboard = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()
  const [formDetails, setFormDetails] = useState({ date: moment().format('YYYY-MM-DD'), sector: '', active_id: '', category: '', amount: 0, unit: '', type: ''  })
  const [formOptions, setFormOptions] = useState({ sector: categories.map(e => e.sector), category: [], unit: [] })
  const [error, setError] = useState('')
  const [formLoading, setFormLoading] = useState(false)
  const [displayForm, setDisplayForm] = useState(false)
  
  const fetch = useFetchData()
  const [loading, data] = fetch

  useEffect(() => {
    setCurrentRoute('dashboard')
  }, [])

  useEffect(() => {
    if (loginStatus.login === false) {
      navigate('/')
    }
  }, [loginStatus.login])

  useEffect(() => {
    let finding = categories.find(f => f.sector === formDetails.sector)
    setFormOptions(p => {return{...p, category: [], unit: []}})
    setFormDetails(p => {return{...p, category: '', active_id: '', type: '', amount: 0, unit: ''}})
    if (finding) {
      setFormOptions(p => {return{...p, category: finding.categories.map(e => e.category)}})
    }
  }, [formDetails.sector])

  useEffect(() => {
    let finding = categories.find(f => f.sector === formDetails.sector)
    setFormOptions(p => {return{...p, unit: []}})
    setFormDetails(p => {return{...p, active_id: '', type: '', amount: 0, unit: ''}})
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
      left: 'center'
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed','Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed', 'Mon', 'Tue', 'Wed']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Insurance & Financial Services',
        type: 'bar',
        barMaxWidth: 100,
        stack: 'Sector',
        emphasis: {
          focus: 'series'
        },
        data: [620, 732, 701, 620, 732, 701, 620, 732, 701, 620, 732, 701, ]
      },
      {
        name: 'Energy',
        type: 'bar',
        barMaxWidth: 100,
        stack: 'Sector',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 620, 732, 701, 620, 732, 701, 620, 732, 701, ]
      },
      {
        name: 'Transport',
        type: 'bar',
        barMaxWidth: 100,
        stack: 'Sector',
        emphasis: {
          focus: 'series'
        },
        data: [60, 72, 71, 620, 732, 701, 620, 732, 701, 620, 732, 701, ]
      },
      {
        name: 'Buildings & Infrastructure',
        type: 'bar',
        barMaxWidth: 100,
        stack: 'Sector',
        emphasis: {
          focus: 'series'
        },
        data: [62, 82, 91, 620, 732, 701, 620, 732, 701, 620, 732, 701, ]
      },
      {
        name: 'Consumer Goods & Services',
        type: 'bar',
        barMaxWidth: 100,
        stack: 'Sector',
        emphasis: {
          focus: 'series'
        },
        data: [620, 732, 701,620, 732, 701, 620, 732, 701, 620, 732, 701,  ]
      },
      {
        name: 'Education',
        type: 'bar',
        barMaxWidth: 100,
        stack: 'Sector',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101,620, 732, 701, 620, 732, 701, 620, 732, 701,  ]
      },
      {
        name: 'Health & Social Care',
        type: 'bar',
        barMaxWidth: 100,
        stack: 'Sector',
        emphasis: {
          focus: 'series'
        },
        data: [60, 72, 71,620, 732, 701, 620, 732, 701, 620, 732, 701,  ]
      },
      {
        name: 'Restaurants & Accommodations',
        type: 'bar',
        barMaxWidth: 100,
        stack: 'Sector',
        emphasis: {
          focus: 'series'
        },
        data: [62, 82, 91,620, 732, 701, 620, 732, 701, 620, 732, 701,  ]
      },
      {
        name: 'Waste',
        type: 'bar',
        barMaxWidth: 100,
        stack: 'Sector',
        emphasis: {
          focus: 'series'
        },
        data: [60, 72, 71,620, 732, 701, 620, 732, 701, 620, 732, 701,  ]
      },
    ]
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
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 10, name: 'Union Ads' },
        ],
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
        { name: 'co2e', color: '#000' },
        { name: 'ch4', color: '#000' },
        { name: 'c02', color: '#000' },
        { name: 'n2o', color: '#000' },
        { name: 'co2e_other', color: '#000' }
      ]
    },
    series: [
      {
        name: 'Constituent Gases',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 20000, 35000, 0],
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
      addDataAPI({ formDetails, setFormLoading, setError })
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
            <select value={formDetails.sector} onChange={e => setFormDetails(p => {return{...p, sector: e.target.value}})} className='h-[40px] w-full border border-slate-300 rounded-md px-[5px]'>
              <option value=''>Choose...</option>
              {formOptions.sector.map((e, i) => (
                <option key={i} value={e}>{e}</option>
              ))}
            </select>
            <p className='text-slate-500'>Category:</p>
            <select value={formDetails.category} onChange={e => setFormDetails(p => {return{...p, category: e.target.value}})} disabled={(formDetails.sector === '') ? true : false} className='h-[40px] w-full border border-slate-300 rounded-md px-[5px]'>
              <option value=''>Choose...</option>
              {formOptions.category.map((e, i) => (
                <option key={i} value={e}>{e}</option>
              ))}
            </select>
            <p className='text-slate-500'>Amount:</p>
            <div className='h-fit w-full grid grid-cols-[1fr_100px] gap-[10px] sm:grid-cols-[1fr_80px]'>
              <input value={formDetails.amount} onChange={e => setFormDetails(p => {return{...p, amount: e.target.value}})} disabled={(formDetails.category === '') ? true : false} type='number' placeholder='1000' className='h-[40px] w-full border border-slate-300 rounded-md px-[10px]'/>
              <select value={formDetails.unit} onChange={e => setFormDetails(p => {return{...p, unit: e.target.value}})} disabled={(formDetails.category === '') ? true : false} className='h-[40px] w-full border border-slate-300 rounded-md px-[5px]'>
                <option value=''>Choose...</option>
                {formOptions.unit.map((e, i) => (
                  <option key={i} value={e}>{e}</option>
                ))}
              </select>
            </div>
            <p className='text-slate-500'>Date:</p>
            <input value={formDetails.date} onChange={e => setFormDetails(p => {return{...p, date: moment(e.target.value).format('YYYY-MM-DD')}})} type='date' className='h-[40px] w-full border border-slate-300 rounded-md px-[10px]'/>
            <button onClick={() => handleAdd()} disabled={formLoading} className='h-[40px] w-full bg-emerald-400 text-white font-semibold rounded-md cursor-pointer px-[10px] flex items-center justify-center mt-[10px] duration-200 hover:opacity-50 focus:outline-none focus-visible:opacity-50'>
              {formLoading ? (
                <div className='h-[30px] w-[30px] rounded-full border-[5px] border-emerald-100 border-t-[5px] border-t-white animate-spin'/>
              ) : 'ADD'}
            </button>
          </div>
        </div>
      </div>

      {/* dashboard */}
      <div className='h-[calc(100%-60px)] min-h-fit w-full bg-slate-100 flex justify-center'>
        <div className='h-fit w-full max-w-[1700px] p-[20px] flex flex-col gap-[20px]'>
          {/* top */}
          <div className='h-fit w-full flex items-center justify-between gap-[10px]'>
            <p className='text-xl font-semibold sm:text-base'>Dashboard</p>
            <button onClick={() => setDisplayForm(true)} className='h-[40px] w-fit bg-emerald-400 text-white font-semibold rounded-md cursor-pointer px-[10px] flex items-center justify-center duration-200 hover:opacity-50 focus:outline-none focus-visible:opacity-50 sm:w-full md:h-[40px]'><FaPlus size={16}/>ADD</button>
          </div>

          {/* first bar chart */}
          <div className='h-fit w-full grid grid-cols-[300px_1fr] gap-[20px]'>
            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
              <p className='font-medium'>Emissions by Sectors</p>
              <div className='flex-1 h-full w-full grid grid-rows-9 gap-[10px]'>
                <div className='h-full w-full flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>Insurance & Financial Services</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='h-full w-full flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>Energy</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='h-full w-full flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>Transport</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='h-full w-full flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>Buildings & Infrastructure</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='h-full w-full flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>Consumer Goods & Services</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='h-full w-full flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>Education</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='h-full w-full flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>Health & Social Care</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='h-full w-full flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>Restaurants & Accommodations</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='h-full w-full flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>Waste</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
              </div>
            </div>

            <div className='h-fit w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl overflow-y-scroll hide-scrollbar'>
              <div className='h-fit w-full flex items-center justify-between'>
                <p className='font-medium'>Carbon Footprint {'('}200kg{')'}</p>
              </div>
              <div className='h-[500px] w-full'>
                <ReactEChart option={footprintMixedChartOption} style={{height: '100%', width: '100%', minWidth: '420px'}}/>
              </div>
            </div>
          </div>

          {/* second bar chart */}
          <div className='h-fit w-full grid grid-cols-[400px_1fr_400px] gap-[20px]'>
            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
              <p className='font-medium'>Emissions by Sectors</p>
              <div className='h-[500px] w-full'>
                <ReactEChart option={emissionsPieChartOption} style={{height: '100%', width: '100%'}}/>
              </div>
            </div>

            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl overflow-y-scroll hide-scrollbar'>
              <p className='font-medium'>Scope 4 emissions by each</p>
              <div className='h-full max-h-[500px] w-full flex flex-col gap-[10px] overflow-y-scroll fancy-scrollbar'>
                <div className='h-fit w-full p-[10px] grid grid-cols-[50px_1fr] text-sm border border-slate-200 rounded-lg gap-[10px]'>
                  <div className='h-full w-full grid grid-rows-2 gap-[5px]'>
                    <div className='h-full w-full flex items-center justify-center bg-green-50 border border-green-200 rounded-md cursor-pointer hover:opacity-50'>
                      <BiSolidEditAlt size={20} className='fill-green-500'/>
                    </div>
                    <div className='h-full w-full flex items-center justify-center bg-red-50 border border-red-100 rounded-md cursor-pointer hover:opacity-50'>
                      <FaTrashAlt size={16} className='fill-red-400'/>
                    </div>
                  </div>
                  <div className='h-fit w-full flex flex-col text-sm gap-[5px]'>
                    <p className='text-base'>Electricity <span className='text-sm text-slate-500'>"Energy"</span></p>
                    <div className='w-full grid grid-cols-2'>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Category</p>
                        <p className='text-base font-semibold'>1000 KWH</p>
                      </div>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Emission</p>
                        <p className='text-base font-semibold'>100 kg</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='h-fit w-full p-[10px] grid grid-cols-[50px_1fr] text-sm border border-slate-200 rounded-lg gap-[10px]'>
                  <div className='h-full w-full grid grid-rows-2 gap-[5px]'>
                    <div className='h-full w-full flex items-center justify-center bg-green-50 border border-green-200 rounded-md cursor-pointer hover:opacity-50'>
                      <BiSolidEditAlt size={20} className='fill-green-500'/>
                    </div>
                    <div className='h-full w-full flex items-center justify-center bg-red-50 border border-red-100 rounded-md cursor-pointer hover:opacity-50'>
                      <FaTrashAlt size={16} className='fill-red-400'/>
                    </div>
                  </div>
                  <div className='h-fit w-full flex flex-col text-sm gap-[5px]'>
                    <p className='text-base'>Electricity <span className='text-sm text-slate-500'>"Energy"</span></p>
                    <div className='w-full grid grid-cols-2'>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Category</p>
                        <p className='text-base font-semibold'>1000 KWH</p>
                      </div>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Emission</p>
                        <p className='text-base font-semibold'>100 kg</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='h-fit w-full p-[10px] grid grid-cols-[50px_1fr] text-sm border border-slate-200 rounded-lg gap-[10px]'>
                  <div className='h-full w-full grid grid-rows-2 gap-[5px]'>
                    <div className='h-full w-full flex items-center justify-center bg-green-50 border border-green-200 rounded-md cursor-pointer hover:opacity-50'>
                      <BiSolidEditAlt size={20} className='fill-green-500'/>
                    </div>
                    <div className='h-full w-full flex items-center justify-center bg-red-50 border border-red-100 rounded-md cursor-pointer hover:opacity-50'>
                      <FaTrashAlt size={16} className='fill-red-400'/>
                    </div>
                  </div>
                  <div className='h-fit w-full flex flex-col text-sm gap-[5px]'>
                    <p className='text-base'>Electricity <span className='text-sm text-slate-500'>"Energy"</span></p>
                    <div className='w-full grid grid-cols-2'>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Category</p>
                        <p className='text-base font-semibold'>1000 KWH</p>
                      </div>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Emission</p>
                        <p className='text-base font-semibold'>100 kg</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='h-fit w-full p-[10px] grid grid-cols-[50px_1fr] text-sm border border-slate-200 rounded-lg gap-[10px]'>
                  <div className='h-full w-full grid grid-rows-2 gap-[5px]'>
                    <div className='h-full w-full flex items-center justify-center bg-green-50 border border-green-200 rounded-md cursor-pointer hover:opacity-50'>
                      <BiSolidEditAlt size={20} className='fill-green-500'/>
                    </div>
                    <div className='h-full w-full flex items-center justify-center bg-red-50 border border-red-100 rounded-md cursor-pointer hover:opacity-50'>
                      <FaTrashAlt size={16} className='fill-red-400'/>
                    </div>
                  </div>
                  <div className='h-fit w-full flex flex-col text-sm gap-[5px]'>
                    <p className='text-base'>Electricity <span className='text-sm text-slate-500'>"Energy"</span></p>
                    <div className='w-full grid grid-cols-2'>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Category</p>
                        <p className='text-base font-semibold'>1000 KWH</p>
                      </div>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Emission</p>
                        <p className='text-base font-semibold'>100 kg</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='h-fit w-full p-[10px] grid grid-cols-[50px_1fr] text-sm border border-slate-200 rounded-lg gap-[10px]'>
                  <div className='h-full w-full grid grid-rows-2 gap-[5px]'>
                    <div className='h-full w-full flex items-center justify-center bg-green-50 border border-green-200 rounded-md cursor-pointer hover:opacity-50'>
                      <BiSolidEditAlt size={20} className='fill-green-500'/>
                    </div>
                    <div className='h-full w-full flex items-center justify-center bg-red-50 border border-red-100 rounded-md cursor-pointer hover:opacity-50'>
                      <FaTrashAlt size={16} className='fill-red-400'/>
                    </div>
                  </div>
                  <div className='h-fit w-full flex flex-col text-sm gap-[5px]'>
                    <p className='text-base'>Electricity <span className='text-sm text-slate-500'>"Energy"</span></p>
                    <div className='w-full grid grid-cols-2'>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Category</p>
                        <p className='text-base font-semibold'>1000 KWH</p>
                      </div>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Emission</p>
                        <p className='text-base font-semibold'>100 kg</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='h-fit w-full p-[10px] grid grid-cols-[50px_1fr] text-sm border border-slate-200 rounded-lg gap-[10px]'>
                  <div className='h-full w-full grid grid-rows-2 gap-[5px]'>
                    <div className='h-full w-full flex items-center justify-center bg-green-50 border border-green-200 rounded-md cursor-pointer hover:opacity-50'>
                      <BiSolidEditAlt size={20} className='fill-green-500'/>
                    </div>
                    <div className='h-full w-full flex items-center justify-center bg-red-50 border border-red-100 rounded-md cursor-pointer hover:opacity-50'>
                      <FaTrashAlt size={16} className='fill-red-400'/>
                    </div>
                  </div>
                  <div className='h-fit w-full flex flex-col text-sm gap-[5px]'>
                    <p className='text-base'>Electricity <span className='text-sm text-slate-500'>"Energy"</span></p>
                    <div className='w-full grid grid-cols-2'>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Category</p>
                        <p className='text-base font-semibold'>1000 KWH</p>
                      </div>
                      <div className='h-fit w-full flex flex-col'>
                        <p className='text-slate-500'>Emission</p>
                        <p className='text-base font-semibold'>100 kg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
              <p className='font-medium'>Constituent Gases</p>
              <div className='h-[350px] w-full'>
                <ReactEChart option={gasRadarChartOption} style={{height: '100%', width: '100%'}}/>
              </div>
              <div className='h-fit w-full flex flex-col'>
                <div className='w-full py-[5px] flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>co2e</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='w-full py-[5px] flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>ch4</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='w-full py-[5px] flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>co2</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='w-full py-[5px] flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>n2o</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
                <div className='w-full py-[5px] flex items-center justify-between text-sm border-b border-b-slate-300 gap-[5px]'>
                  <p className='text-slate-500'>co2e_other</p>
                  <p className='font-semibold'>1000kg</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard