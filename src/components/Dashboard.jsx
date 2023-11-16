import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import moment from 'moment/moment'
import ReactEChart from 'echarts-for-react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { DatePicker } from '@mui/x-date-pickers';
import { Select, MenuItem, FormControl, InputLabel, TextField, Tooltip } from '@mui/material';
import { FaPlus, FaTrashAlt, FaInfoCircle } from 'react-icons/fa'
import { BiSolidEditAlt } from 'react-icons/bi'
import { ImCancelCircle } from 'react-icons/im'
import { PiPencilDuotone } from 'react-icons/pi'
import { GiSmokeBomb } from 'react-icons/gi'

import { categories, unit_types } from '../local'
import { addDataAPI, deleteDataAPI, updateDataAPI } from '../hooks/functions'
import useFetchData from '../hooks/useFetchData'

const Dashboard = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()
  const [formDetails, setFormDetails] = useState({ date: moment(), sector: '', active_id: '', category: '', amount: '', unit: '', type: '' })
  const [formOptions, setFormOptions] = useState({ sector: categories.map(e => e.sector), category: [], unit: [] })
  const [error, setError] = useState({ global: '', sector: false, category: false, amount: false, unit: false, date: false })
  const [formLoading, setFormLoading] = useState(false)
  const [displayForm, setDisplayForm] = useState(false)
  const [displayFormEdit, setDisplayFormEdit] = useState(false)
  const [deleteDialogue, setDeleteDialogue] = useState({ display: false, data: {} })
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
        data: (data.by_date && data.by_date.length > 0) ? data.by_date.map(e => e.date) : []
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: (chartCF.sectors.length > 0 && chartCF.data.length > 0) ? (
      chartCF.sectors.map((e, i) => {
        return {
          name: e,
          type: 'bar',
          barMaxWidth: 100,
          stack: 'Sector',
          emphasis: {
            focus: 'series'
          },
          data: chartCF.data.map(m => m[e] ? Number(m[e]).toFixed(0) : '0')
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

  // handle function for when sector value onChange
  const handleSectorOnChange = (e) => {
    let finding = categories.find(f => f.sector === e.target.value)
    if (finding) {
      setFormOptions(p => {return{...p, category: finding.categories.map(e => e.category), unit: []}})
      setFormDetails(p => {return{...p, sector: e.target.value, active_id: '', category: '', amount: '', unit: '', type: ''}})
    }
  }

  // handle function for when category value onChange
  const handleCategoryOnChange = (e) => {
    let finding = categories.find(f => f.sector === formDetails.sector)
    if (finding) {
      let tempUnit = finding?.categories?.find(f => f.category === e.target.value)
      let tempFinal = unit_types.find(f => f.unit_type === tempUnit?.unit)?.units[`${tempUnit.unit.toLowerCase()}_unit`]
      setFormOptions(p => {return{...p, unit: tempFinal ? tempFinal : []}})
      setFormDetails(p => {return{...p, category: e.target.value, active_id: tempUnit?.id ? tempUnit?.id : '', type: tempUnit?.unit ? tempUnit?.unit : '', amount: '', unit: ''}})
    }
  }

  // handle function for when category
  const handleEditFormDisplay = (e) => {
    let finding = categories.find(f => f.sector === e.sector)

    if (finding) {
      let tempUnit = finding?.categories?.find(f => f.category === e.category)
      let tempFinal = unit_types.find(f => f.unit_type === tempUnit?.unit)?.units[`${tempUnit.unit.toLowerCase()}_unit`]

      setUserID(e.id);
      setDisplayFormEdit(true);
      setFormOptions(p => {
        return {
          ...p,
          category: finding.categories.map(e => e.category),
          unit: tempFinal ? tempFinal : []
        }
      })
      setFormDetails({
        date: moment(e.date),
        sector: e.sector,
        active_id: tempUnit?.id ? tempUnit?.id : '',
        category: e.category,
        amount: e.activity_data.activity_value,
        unit: tempFinal?.find(f => f === e.activity_data.activity_unit) ? e.activity_data.activity_unit : '',
        type: tempUnit?.unit ? tempUnit?.unit : ''
      });
    } else {
      window.alert("This entry can't be updated. Please delete this entry and add a new one.")
    }
  }

  // form submit
  const handleAdd = () => {
    setError({ global: '', sector: false, category: false, amount: false, unit: false, date: false })

    if (formDetails.sector === '') {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.', sector: true } })
    }

    if (formDetails.category === '') {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.', category: true } })
    }

    if (formDetails.amount === '' || Number(formDetails.amount) <= 0) {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.', amount: true } })
    }

    if (formDetails.unit === '') {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.', unit: true } })
    }

    if (formDetails.date > moment()) {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.', date: true } })
    }

    if (formDetails.date === '' || formDetails.date > moment() || formDetails.sector === '' || formDetails.active_id === '' || formDetails.category === '' || formDetails.amount === '' || Number(formDetails.amount) <= 0 || formDetails.unit === '' || formDetails.type === '') {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.' } })
    } else {
      setError({ global: '', sector: false, category: false, amount: false, unit: false, date: false })
      addDataAPI({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, setDisplayForm, navigate })
    }
  }

  // form submit
  const handleEdit = () => {
    setError({ global: '', sector: false, category: false, amount: false, unit: false, date: false })

    if (formDetails.sector === '') {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.', sector: true } })
    }

    if (formDetails.category === '') {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.', category: true } })
    }

    if (formDetails.amount === '' || Number(formDetails.amount) <= 0) {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.', amount: true } })
    }

    if (formDetails.unit === '') {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.', unit: true } })
    }

    if (formDetails.date > moment()) {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.', date: true } })
    }

    if (formDetails.date === '' || formDetails.date > moment() || formDetails.sector === '' || formDetails.active_id === '' || formDetails.category === '' || formDetails.amount === '' || Number(formDetails.amount) <= 0 || formDetails.unit === '' || formDetails.type === '') {
      setError(p => { return { ...p, global: 'Please fill up the whole form. Amount should be more than 0. Only past data can be recorded.' } })
    } else {
      setError({ global: '', sector: false, category: false, amount: false, unit: false, date: false })
      updateDataAPI({ formDetails, setFormLoading, setError, setFormDetails, setRefresh, userID, setDisplayFormEdit, navigate })
    }
  }

  return (
    <>
      {/* form */}
      <div className={`fixed z-50 top-0 ${displayForm ? 'h-full w-full scale-100 opacity-100' : 'h-0 w-0 scale-0 opacity-0'} min-h-fit duration-500 bg-white/80 backdrop-blur-sm grid items-center overflow-y-scroll hide-scrollbar`}>
        <div className='h-fit w-full p-[20px] flex justify-center'>
          <div className='h-fit w-full max-w-[400px] bg-white p-[20px] flex flex-col gap-[10px] rounded-xl border border-slate-100 shadow-md'>
            <div className='h-fit w-full flex justify-between'>
              <p className='font-medium'>Estimation</p>
              <ImCancelCircle size={24} className='fill-red-400 cursor-pointer hover:opacity-50'
                onClick={() => {
                  setDisplayForm(false);
                  setFormDetails({ date: moment(), sector: '', active_id: '', category: '', amount: '', unit: '', type: ''  });
                  setError({ global: '', sector: false, category: false, amount: false, unit: false, date: false });
                }}/>
            </div>
            <p className='text-sm text-slate-500'>Calculate total estimated emissions produced for a particular activity, in kgCO2e, using the available emission factors.</p>
            {(error.global === '') ? <></> : (<p className='text-sm text-red-400'>{error.global}</p>)}
            
            <FormControl style={{ width: "100%" }}>
              <InputLabel id="add-sector-select-label" error={error.sector}>Sector</InputLabel>
              <Select labelId="add-sector-select-label" label="Sector" onKeyDown={e => (e.key === 'Enter' && !formLoading) && handleAdd()} value={formDetails.sector} onChange={e => handleSectorOnChange(e)} error={error.sector} disabled={formLoading}>
                {formOptions.sector.map((e, i) => (
                  <MenuItem key={i} value={e}>{e}</MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <FormControl style={{ width: "100%" }}>
              <InputLabel id="add-category-select-label" error={error.category}>Category</InputLabel>
              <Select labelId="add-category-select-label" label="Category" onKeyDown={e => (e.key === 'Enter' && !formLoading) && handleAdd()} value={formDetails.category} onChange={e => handleCategoryOnChange(e)} disabled={(formDetails.sector === '' || formLoading) ? true : false} error={error.category}>
                {formOptions.category.map((e, i) => (
                  <MenuItem key={i} value={e}>{e}</MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <div className='h-fit w-full grid grid-cols-[1fr_100px] gap-[10px] sm:grid-cols-[1fr_80px]'>
              <FormControl style={{ width: "100%" }}>
                <TextField label="Amount" placeholder='50.25' onKeyDown={e => (e.key === 'Enter' && !formLoading) && handleAdd()} value={formDetails.amount} onChange={e => setFormDetails(p => {return{...p, amount: e.target.value}})} disabled={(formDetails.category === '' || formLoading) ? true : false} type='number' error={error.amount}/>
              </FormControl>
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="add-unit-select-label" error={error.unit}>Unit</InputLabel>
                <Select labelId="add-unit-select-label" label="Unit" onKeyDown={e => (e.key === 'Enter' && !formLoading) && handleAdd()} value={formDetails.unit} onChange={e => setFormDetails(p => {return{...p, unit: e.target.value}})} disabled={(formDetails.category === '' || formLoading) ? true : false} error={error.unit}>
                  {formOptions.unit.map((e, i) => (
                    <MenuItem key={i} value={e}>{e}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker inputFormat="yyyy-MM" views={['year', 'month']} value={formDetails.date} onChange={e => setFormDetails(p => {return{...p, date: e}})} maxDate={moment()} disabled={formLoading} error={error.date} slotProps={{ textField: { onKeyDown: (e => (e.key === 'Enter' && !formLoading) && handleAdd()) } }}/>
            </LocalizationProvider>

            <button onKeyDown={e => (e.key === 'Enter' && !formLoading) && handleAdd()} onClick={() => !formLoading && handleAdd()} disabled={formLoading} className={`h-[56px] w-full text-white font-semibold rounded-md px-[10px] flex items-center justify-center duration-200 ${formLoading ? 'bg-slate-400 cursor-not-allowed' : 'cursor-pointer bg-emerald-400 hover:opacity-50 focus:outline-none focus-visible:opacity-50'}`}>
              {formLoading ? (
                <div className='h-[30px] w-[30px] rounded-full border-[5px] border-slate-300 border-t-[5px] border-t-white animate-spin'/>
              ) : 'ADD'}
            </button>
          </div>
        </div>
      </div>

      {/* form edit */}
      <div className={`fixed z-50 top-0 ${displayFormEdit ? 'h-full w-full scale-100 opacity-100' : 'h-0 w-0 scale-0 opacity-0'} min-h-fit duration-500 bg-white/80 backdrop-blur-sm grid items-center overflow-y-scroll hide-scrollbar`}>
        <div className='h-fit w-full p-[20px] flex justify-center'>
          <div className='h-fit w-full max-w-[400px] bg-white p-[20px] flex flex-col gap-[10px] rounded-xl border border-slate-100 shadow-md'>
            <div className='h-fit w-full flex justify-between'>
              <p className='font-medium'>Update Estimation</p>
              <ImCancelCircle size={24} className='fill-red-400 cursor-pointer hover:opacity-50'
                onClick={() => {
                  setDisplayFormEdit(false);
                  setFormDetails({ date: moment(), sector: '', active_id: '', category: '', amount: '', unit: '', type: ''  });
                  setError({ global: '', sector: false, category: false, amount: false, unit: false, date: false });
                }}/>
            </div>
            <p className='text-sm text-slate-500'>Calculate total estimated emissions produced for a particular activity, in kgCO2e, using the available emission factors.</p>
            {(error.global === '') ? <></> : (<p className='text-sm text-red-400'>{error.global}</p>)}
            
            <FormControl style={{ width: "100%" }}>
              <InputLabel id="add-sector-select-label" error={error.sector}>Sector</InputLabel>
              <Select labelId="add-sector-select-label" label="Sector" onKeyDown={e => (e.key === 'Enter' && !formLoading) && handleEdit()} value={formDetails.sector} onChange={e => handleSectorOnChange(e)} error={error.sector} disabled={formLoading}>
                {formOptions.sector.map((e, i) => (
                  <MenuItem key={i} value={e}>{e}</MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <FormControl style={{ width: "100%" }}>
              <InputLabel id="add-category-select-label" error={error.category}>Category</InputLabel>
              <Select labelId="add-category-select-label" label="Category" onKeyDown={e => (e.key === 'Enter' && !formLoading) && handleEdit()} value={formDetails.category} onChange={e => handleCategoryOnChange(e)} disabled={(formDetails.sector === '' || formLoading) ? true : false} error={error.category}>
                {formOptions.category.map((e, i) => (
                  <MenuItem key={i} value={e}>{e}</MenuItem>
                ))}
              </Select>
            </FormControl>
            
            <div className='h-fit w-full grid grid-cols-[1fr_100px] gap-[10px] sm:grid-cols-[1fr_80px]'>
              <FormControl style={{ width: "100%" }}>
                <TextField label="Amount" placeholder='50.25' onKeyDown={e => (e.key === 'Enter' && !formLoading) && handleEdit()} value={formDetails.amount} onChange={e => setFormDetails(p => {return{...p, amount: e.target.value}})} disabled={(formDetails.category === '' || formLoading) ? true : false} type='number' error={error.amount}/>
              </FormControl>
              <FormControl style={{ width: "100%" }}>
                <InputLabel id="add-unit-select-label" error={error.unit}>Unit</InputLabel>
                <Select labelId="add-unit-select-label" label="Unit" onKeyDown={e => (e.key === 'Enter' && !formLoading) && handleEdit()} value={formDetails.unit} onChange={e => setFormDetails(p => {return{...p, unit: e.target.value}})} disabled={(formDetails.category === '' || formLoading) ? true : false} error={error.unit}>
                  {formOptions.unit.map((e, i) => (
                    <MenuItem key={i} value={e}>{e}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DatePicker inputFormat="yyyy-MM" views={['year', 'month']} value={formDetails.date} onChange={e => setFormDetails(p => {return{...p, date: e}})} maxDate={moment()} disabled={formLoading} error={error.date} slotProps={{ textField: { onKeyDown: (e => (e.key === 'Enter' && !formLoading) && handleEdit()) } }}/>
            </LocalizationProvider>

            <button onKeyDown={e => (e.key === 'Enter' && !formLoading) && handleEdit()} onClick={() => !formLoading && handleEdit()} disabled={formLoading} className={`h-[56px] w-full text-white font-semibold rounded-md px-[10px] flex items-center justify-center duration-200 ${formLoading ? 'bg-slate-400 cursor-not-allowed' : 'cursor-pointer bg-emerald-400 hover:opacity-50 focus:outline-none focus-visible:opacity-50'}`}>
              {formLoading ? (
                <div className='h-[30px] w-[30px] rounded-full border-[5px] border-slate-300 border-t-[5px] border-t-white animate-spin'/>
              ) : 'UPDATE'}
            </button>
          </div>
        </div>
      </div>

      {/* delete dialogue */}
      <div className={`fixed z-50 top-0 ${deleteDialogue.display ? 'h-full w-full scale-100 opacity-100' : 'h-0 w-0 scale-0 opacity-0'} min-h-fit duration-500 bg-white/80 backdrop-blur-sm grid items-center overflow-y-scroll hide-scrollbar`}>
        <div className='h-fit w-full p-[20px] flex justify-center'>
          <div className='h-fit w-full max-w-[400px] bg-white p-[20px] flex flex-col gap-[10px] rounded-xl border border-slate-300 shadow-md'>
            <p className='font-medium'>Confirm Delete</p>
            <p className='text-sm text-slate-500'>This particular entry will be permanently deleted.</p>

            <div className='h-fit w-full grid grid-cols-2 gap-[10px]'>
              <button onClick={() => deleteDataAPI({ setFormLoading, setRefresh, id: deleteDialogue.data.id, navigate, setDeleteDialogue })} disabled={(formLoading || !deleteDialogue.data.id) ? true : false} className={`h-[40px] w-full bg-transparent text-slate-400 border border-slate-300 rounded-md px-[10px] flex items-center justify-center duration-200 ${(formLoading || !deleteDialogue.data.id) ? 'cursor-not-allowed' : 'cursor-pointer hover:opacity-50 focus:outline-none focus-visible:opacity-50'} sm:text-sm`}>
                {formLoading ? (
                  <div className='h-[30px] w-[30px] rounded-full border-[5px] border-slate-300 border-t-[5px] border-t-white animate-spin'/>
                ) : 'CONFIRM'}
              </button>
              <button onClick={() => setDeleteDialogue({ display: false, data: {} })} className='h-[40px] w-full bg-red-400 text-white rounded-md cursor-pointer px-[10px] flex items-center justify-center duration-200 hover:opacity-50 focus:outline-none focus-visible:opacity-50 sm:text-sm'>
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* dashboard */}
      <div className='h-fit min-h-[calc(100%-80px)] w-full bg-slate-100 flex justify-center mobile:min-h-[calc(100%-60px)]'>
        <div className='h-fit w-full max-w-[1700px] py-[20px] px-[20px] flex flex-col gap-[20px] md:px-0'>
          {/* top */}
          <div className='h-fit w-full flex items-center justify-between gap-[10px] md:px-[20px] xs:flex-col xs:items-start'>
            <p className='text-2xl font-bold'>Dashboard</p>
            <button onClick={() => setDisplayForm(true)} className='h-[40px] w-fit bg-emerald-400 text-white font-semibold rounded-md cursor-pointer px-[10px] flex items-center justify-center duration-200 hover:opacity-50 focus:outline-none focus-visible:opacity-50 md:h-[40px] xs:w-full'><FaPlus size={16}/>ADD</button>
          </div>

          {/* first bar chart */}
          <div className='h-[600px] w-full grid grid-cols-[300px_1fr] gap-[20px] xxl:grid-cols-1 xxl:h-fit'>
            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl xxl:h-fit md:rounded-none'>
              <div className='w-full flex items-center flex-wrap gap-x-[5px]'>
                <p className='font-bold'>Emissions by Sectors</p>
                <Tooltip title='Quick view of total emissions by each sectors' arrow>
                  <div>
                    <FaInfoCircle size={20} className='fill-slate-500 cursor-pointer hover:opacity-50'/>
                  </div>
                </Tooltip>
              </div>
              <div className='h-fit w-full grid grid-flow-row gap-[10px] xxl:flex xxl:flex-col'>
                {(chartSector.length > 0) ? (
                  chartSector.map((e, i) => (
                    <div className='h-full w-full flex items-center justify-between py-[10px] text-sm border-b border-b-slate-300 gap-[5px] xxl:h-fit' key={i}>
                      <p className='text-slate-500'>{e.name}</p>
                      <p className='font-semibold'>{Number(e.value).toFixed(0)}kg</p>
                    </div>
                  ))
                ) : (
                  <div className='h-full w-full flex items-center justify-between text-sm gap-[5px] xxl:h-fit'>
                    <p className='text-slate-500'>No Data yet</p>
                  </div>
                )}
              </div>
            </div>

            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl overflow-y-scroll hide-scrollbar xxl:h-[500px] md:rounded-none'>
              <div className='w-full flex items-center flex-wrap gap-x-[5px]'>
                {data?.by_gases?.co2e_total ? (
                  <p className='font-bold'>Carbon Footprint {'(' + (data.by_gases.co2e_total*1).toFixed(0) +' kg)'}</p>
                ) : (
                  <p className='font-bold'>Carbon Footprint</p>
                )}
                <Tooltip title='Stacked bar chart to observe your carbon footprint history' arrow>
                  <div>
                    <FaInfoCircle size={20} className='fill-slate-500 cursor-pointer hover:opacity-50'/>
                  </div>
                </Tooltip>
              </div>
              <div className='h-full w-full'>
                <ReactEChart option={footprintMixedChartOption} notMerge={true} showLoading={loading} style={{height: '100%', width: '100%', minWidth: '420px'}}/>
              </div>
            </div>
          </div>

          {/* second bar chart */}
          <div className='h-[600px] w-full grid grid-cols-[400px_1fr_400px] gap-[20px] 4xl:grid-cols-[350px_1fr_350px] xxxl:grid-cols-2 lg:grid-cols-1 lg:h-fit'>
            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl lg:h-[500px] md:rounded-none'>
              <div className='w-full flex items-center flex-wrap gap-x-[5px]'>
                <p className='font-bold'>Emissions by Sectors</p>
                <Tooltip title='Pie chart to observe emissions by different sectors' arrow>
                  <div>
                    <FaInfoCircle size={20} className='fill-slate-500 cursor-pointer hover:opacity-50'/>
                  </div>
                </Tooltip>
              </div>
              <div className='h-full w-full'>
                <ReactEChart option={emissionsPieChartOption} notMerge={true} showLoading={loading} style={{height: '100%', width: '100%'}}/>
              </div>
            </div>

            <div className='h-full w-full flex flex-col gap-[10px] py-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl overflow-y-scroll hide-scrollbar xxxl:hidden'>
              <div className='w-full px-[20px] flex items-center flex-wrap gap-x-[5px]'>
                <p className='font-bold'>Scope emissions by each</p>
                <Tooltip title='Manage your entries' arrow>
                  <div>
                    <FaInfoCircle size={20} className='fill-slate-500 cursor-pointer hover:opacity-50'/>
                  </div>
                </Tooltip>
              </div>
              <div className='h-full w-full flex flex-col items-center px-[20px] pb-[2px] overflow-y-scroll fancy-scrollbar'>
                <div className='h-fit w-full flex flex-col gap-[10px]'>
                  {data.data ? (
                    data.data.sort((a, b) => new Date(a.date) - new Date(b.date)).map((e, i) => (
                      <div className='h-fit min-h-[100px] w-full px-[10px] py-[20px] grid grid-cols-[120px_1fr_105px] border border-slate-200 rounded-xl gap-[10px] 4xl:grid-cols-[100px_1fr_45px] md:grid-cols-[1fr_45px]' key={i}>
                        <div className='h-full w-full flex flex-col items-center justify-center md:hidden'>
                          <p className='text-[12px] leading-normal'>Emission</p>
                          <p className='text-3xl font-semibold leading-normal 4xl:text-2xl md:text-xl'>{(Number(e.co2e) > 1000) ? (Number(e.co2e)/1000).toFixed(0) : Number(e.co2e).toFixed(0)}<span className='text-[12px] font-medium text-slate-500'>{(Number(e.co2e) > 1000) ? 't' : 'kg'}</span></p>
                        </div>
                        <div className='h-full w-full flex flex-col justify-center overflow-hidden'>
                          <p className='text-[12px] leading-normal text-slate-500'>{moment(e.date).format('MMMM, YYYY')}</p>
                          <p className='text-lg leading-normal inline md:text-base'>{e.category}&nbsp;<span className='text-sm text-slate-500 inline md:text-[12px]'>"{e.sector}"</span></p>
                          <p className='text-base leading-normal md:hidden'>{Number(e.activity_data.activity_value).toFixed(0)} {e.activity_data.activity_unit} <span className='text-[12px] text-slate-500'>{'(Input)'}</span></p>
                          {/* <div className='text-sm font-semibold leading-normal items-center flex-wrap gap-[5px] hidden md:flex'><div className='text-[12px] font-normal leading-normal text-slate-500 flex items-center flex-wrap'><GiSmokeBomb size={14}/>&nbsp;{'Emission :'}</div>{(Number(e.co2e) > 1000) ? (Number(e.co2e)/1000).toFixed(0) : Number(e.co2e).toFixed(0)} {(Number(e.co2e) > 1000) ? 't' : 'kg'} </div>
                          <div className='text-sm font-semibold leading-normal items-center flex-wrap gap-[5px] hidden md:flex'><div className='text-[12px] font-normal leading-normal text-slate-500 flex items-center flex-wrap'><PiPencilDuotone size={14}/>&nbsp;{'Input :'}</div>{Number(e.activity_data.activity_value).toFixed(0)} {e.activity_data.activity_unit}</div> */}
                        </div>
                        <div className='h-full w-full grid grid-cols-2 gap-[5px] 4xl:grid-cols-1'>
                          <div className='h-full w-full flex items-center justify-center'>
                            <Tooltip title='Delete' arrow>
                              <div className='group w-[50px] h-[50px] bg-slate-50 rounded-full flex items-center justify-center cursor-pointer duration-200 hover:bg-red-400 4xl:h-[40px] 4xl:w-[40px]' onClick={() => setDeleteDialogue({ display: true, data: e })}>
                                {formLoading ? (
                                  <div className='h-[30px] w-[30px] rounded-full border-[5px] border-emerald-100 border-t-[5px] border-t-white animate-spin'/>
                                ) : (
                                  <FaTrashAlt size={14} className='fill-slate-400 duration-200 group-hover:fill-white'/>
                                )}
                              </div>
                            </Tooltip>
                          </div>
                          <div className='h-full w-full flex items-center justify-center'>
                            <Tooltip title='Update' arrow>
                              <div className='group w-[50px] h-[50px] bg-green-50 rounded-full flex items-center justify-center cursor-pointer duration-200 hover:bg-green-500 4xl:h-[40px] 4xl:w-[40px]' onClick={() => handleEditFormDisplay(e)}>
                                {formLoading ? (
                                  <div className='h-[30px] w-[30px] rounded-full border-[5px] border-emerald-100 border-t-[5px] border-t-white animate-spin'/>
                                ) : (
                                  <BiSolidEditAlt size={20} className='fill-green-500 duration-200 group-hover:fill-white'/>
                                )}
                              </div>
                            </Tooltip>
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
            
            <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl lg:h-[500px] md:rounded-none'>
              <div className='w-full flex items-center flex-wrap gap-x-[5px]'>
                <p className='font-bold'>Constituent Gases</p>
                <Tooltip title='Radar chart to observe different gas emissions' arrow>
                  <div>
                    <FaInfoCircle size={20} className='fill-slate-500 cursor-pointer hover:opacity-50'/>
                  </div>
                </Tooltip>
              </div>
              <div className='h-full w-full'>
                <ReactEChart option={gasRadarChartOption} notMerge={true} showLoading={loading} style={{height: '100%', width: '100%'}}/>
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
          <div className='h-[500px] w-full hidden gap-[20px] xxxl:grid'>
            <div className='h-full w-full flex flex-col items-center gap-[10px] py-[20px] bg-white shadow-[0px_2px_4px_#cdd4dc] rounded-xl overflow-y-scroll hide-scrollbar md:rounded-none'>
              <div className='w-full px-[20px] flex items-center flex-wrap gap-x-[5px]'>
                <p className='font-bold'>Scope emissions by each</p>
                <Tooltip title='Manage your entries' arrow>
                  <div>
                    <FaInfoCircle size={20} className='fill-slate-500 cursor-pointer hover:opacity-50'/>
                  </div>
                </Tooltip>
              </div>
              <div className='h-full w-full flex flex-col items-center px-[20px] pb-[2px] overflow-y-scroll fancy-scrollbar'>
                <div className='h-fit w-full flex flex-col gap-[10px]'>
                  {data.data ? (
                    data.data.sort((a, b) => new Date(a.date) - new Date(b.date)).map((e, i) => (
                      <div className='h-fit min-h-[100px] w-full px-[10px] py-[20px] grid grid-cols-[120px_1fr_105px] border border-slate-200 rounded-xl gap-[10px] lg:grid-cols-[100px_1fr_45px] md:grid-cols-[1fr_45px]' key={i}>
                        <div className='h-full w-full flex flex-col items-center justify-center md:hidden'>
                          <p className='text-[12px] leading-normal'>Emission</p>
                          <p className='text-3xl font-semibold leading-normal lg:text-2xl md:text-xl'>{(Number(e.co2e) > 1000) ? (Number(e.co2e)/1000).toFixed(0) : Number(e.co2e).toFixed(0)}<span className='text-[12px] font-medium text-slate-500'>{(Number(e.co2e) > 1000) ? 't' : 'kg'}</span></p>
                        </div>
                        <div className='h-full w-full flex flex-col justify-center overflow-hidden'>
                          <p className='text-[12px] leading-normal text-slate-500'>{moment(e.date).format('MMMM, YYYY')}</p>
                          <p className='text-lg leading-normal inline md:text-base'>{e.category}&nbsp;<span className='text-sm text-slate-500 inline md:text-[12px]'>"{e.sector}"</span></p>
                          <p className='text-base leading-normal md:hidden'>{Number(e.activity_data.activity_value).toFixed(0)} {e.activity_data.activity_unit} <span className='text-[12px] text-slate-500'>{'(Input)'}</span></p>
                          <div className='text-sm font-semibold leading-normal items-center flex-wrap gap-[5px] hidden md:flex'><div className='text-[12px] font-normal leading-normal text-slate-500 flex items-center flex-wrap'><GiSmokeBomb size={14}/>&nbsp;{'Emission :'}</div>{(Number(e.co2e) > 1000) ? (Number(e.co2e)/1000).toFixed(0) : Number(e.co2e).toFixed(0)} {(Number(e.co2e) > 1000) ? 't' : 'kg'} </div>
                          <div className='text-sm font-semibold leading-normal items-center flex-wrap gap-[5px] hidden md:flex'><div className='text-[12px] font-normal leading-normal text-slate-500 flex items-center flex-wrap'><PiPencilDuotone size={14}/>&nbsp;{'Input :'}</div>{Number(e.activity_data.activity_value).toFixed(0)} {e.activity_data.activity_unit}</div>
                        </div>
                        <div className='h-full w-full grid grid-cols-2 gap-[5px] lg:grid-cols-1'>
                          <div className='h-full w-full flex items-center justify-center'>
                            <Tooltip title='Delete' arrow>
                              <div className='group w-[50px] h-[50px] bg-slate-50 rounded-full flex items-center justify-center cursor-pointer duration-200 hover:bg-red-400 lg:h-[40px] lg:w-[40px]' onClick={() => setDeleteDialogue({ display: true, data: e })}>
                                {formLoading ? (
                                  <div className='h-[30px] w-[30px] rounded-full border-[5px] border-emerald-100 border-t-[5px] border-t-white animate-spin'/>
                                ) : (
                                  <FaTrashAlt size={14} className='fill-slate-400 duration-200 group-hover:fill-white'/>
                                )}
                              </div>
                            </Tooltip>
                          </div>
                          <div className='h-full w-full flex items-center justify-center'>
                            <Tooltip title='Update' arrow>
                              <div className='group w-[50px] h-[50px] bg-green-50 rounded-full flex items-center justify-center cursor-pointer duration-200 hover:bg-green-500 lg:h-[40px] lg:w-[40px]' onClick={() => handleEditFormDisplay(e)}>
                                {formLoading ? (
                                  <div className='h-[30px] w-[30px] rounded-full border-[5px] border-emerald-100 border-t-[5px] border-t-white animate-spin'/>
                                ) : (
                                  <BiSolidEditAlt size={20} className='fill-green-500 duration-200 group-hover:fill-white'/>
                                )}
                              </div>
                            </Tooltip>
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
      </div>
    </>
  )
}

export default Dashboard