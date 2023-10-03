import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuArrowUpDown } from 'react-icons/lu'
import ReactEChart from 'echarts-for-react'
import moment from 'moment'

import { esgDataAPI, esgListDataAPI, esgCompanyNameAPI } from '../hooks/functions'

const Search = ({ setCurrentRoute, loginStatus }) => {
  const navigate = useNavigate()
  
  const [displayList, setDisplayList] = useState(false)
  const [form, setForm] = useState('')
  const [company, setCompany] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [listData, setListData] = useState([])

  useEffect(() => {
    setCurrentRoute('search')
  }, [])

  useEffect(() => {
    if (loginStatus.login === false) {
      navigate('/')
    }
  }, [loginStatus.login])

  useEffect(() => {
    setForm('TSLA')
    esgDataAPI({ setLoading, setData, symbol: 'TSLA', setError })
    esgListDataAPI({ setLoading, setListData })
    esgCompanyNameAPI({ setCompany, symbol: 'TSLA' })
  }, [])

  const chartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        saveAsImage: { show: true }
      }
    },
    legend: {},
    xAxis: [
      {
        type: 'category',
        data: (data.length > 0) ? data.map(e => e.timestamp.split('/')[1]) : [],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Score',
      }
    ],
    series: [
      {
        name: 'Environment',
        type: 'bar',
        color: '#bfdbfe',
        data: (data.length > 0) ? data.map(e => Number(e.environment).toFixed(0)) : []
      },
      {
        name: 'Social',
        type: 'bar',
        color: '#e9d5ff',
        data: (data.length > 0) ? data.map(e => Number(e.social).toFixed(0)) : []
      },
      {
        name: 'Governance',
        type: 'bar',
        color: '#fef08a',
        data: (data.length > 0) ? data.map(e => Number(e.governance).toFixed(0)) : []
      },
      {
        name: 'ESG',
        type: 'line',
        color: '#22c55e',
        data: (data.length > 0) ? data.map(e => Number(e.esg).toFixed(0)) : []
      }
    ]
  };

  const handleSearch = () => {
    if (form === '') {
      setError('Input needed')
    } else {
      setError('')
      setDisplayList(false)
      esgDataAPI({ setLoading, setData, symbol: form, setError })
      esgCompanyNameAPI({ setCompany, symbol: form })
    }
  }

  return (
    <div className='h-fit min-h-[calc(100%-60px)] w-full bg-slate-200 flex justify-center'>
      <div className='h-fit w-full max-w-[1700px] p-[20px] flex flex-col gap-[20px]'>
        <div className='h-fit w-full'>
          <p className='text-lg font-semibold sm:text-base'>Environment, Social and Governance (ESG) Risk Ratings</p>
          <p className='text-slate-600 text-justify sm:text-sm'>Find out how sustainable company businesses are by observing their ESG Risk scores throughout the years.</p>
        </div>
        <div className='h-fit w-full flex flex-col'>
          <p className='text-slate-600 sm:text-sm'>Enter company symbol to search</p>
          {(error !== '') && <p className='text-red-400 sm:text-sm'>{error}</p>}
          <div className='flex gap-[10px] sm:flex-col'>
            <input value={form} onKeyDown={e => (e.key === 'Enter') && handleSearch()} onChange={e => setForm(e.target.value)} type="text" placeholder='TSLA' className={`h-[50px] w-full max-w-[300px] px-[5px] border-2 ${(error === '') ? 'border-slate-300' : 'border-red-300'} rounded-md bg-white focus:outline-none focus-visible:border-slate-600 md:h-[40px]`}/>
            <button onKeyDown={e => (e.key === 'Enter') && handleSearch()} onClick={() => handleSearch()} className='h-[50px] w-[150px] bg-emerald-400 text-white font-semibold rounded-md cursor-pointer px-[10px] duration-200 hover:opacity-50 focus:outline-none focus-visible:opacity-50 sm:w-full md:h-[40px]'>Search</button>
            <button onKeyDown={e => (e.key === 'Enter') && setDisplayList(true)} onClick={() => setDisplayList(true)} className='h-[50px] w-[150px] bg-slate-600 text-white font-semibold rounded-md cursor-pointer px-[10px] flex items-center justify-center gap-[5px] duration-200 whitespace-nowrap hover:opacity-50 focus:outline-none focus-visible:opacity-50 sm:w-full md:h-[40px]'>Top 21</button>
          </div>
        </div>
        
        <div className='h-fit w-full flex'>
          {/* individual with chart */}
          <div className={`${displayList ? 'scale-0 h-0 w-0 opacity-0' : 'scale-100 h-fit w-full opacity-100'} flex flex-col gap-[20px] origin-top-left duration-500`}>
            <div className='h-fit w-full flex flex-col gap-[5px] p-[10px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
              <p className='font-medium'>ESG Risk Scores {data[data.length-1]?.timestamp ? '('+data[data.length-1].timestamp.split('/')[1]+' AD)' : ''}</p>
              <div className='h-fit w-full grid grid-cols-4 gap-[10px] text-slate-500 xl:grid-cols-2 md:grid-cols-1'>
                <div className='w-full flex flex-col md:flex-row md:gap-[10px] md:items-center'>
                  <p className='text-sm md:order-2'>Total ESG Risk Score</p>
                  <p className='text-3xl text-slate-800 font-bold md:order-1 md:w-[60px] md:text-2xl'>{(data.length > 0) ? Number(data[data.length-1].esg).toFixed(0) : '-'}</p>
                </div>
                <div className='w-full flex flex-col md:flex-row md:gap-[10px] md:items-center'>
                  <p className='text-sm md:order-2'>Environment Risk Score</p>
                  <p className='text-3xl text-slate-800 font-bold md:order-1 md:w-[60px] md:text-2xl'>{(data.length > 0) ? Number(data[data.length-1].environment).toFixed(0) : '-'}</p>
                </div>
                <div className='w-full flex flex-col md:flex-row md:gap-[10px] md:items-center'>
                  <p className='text-sm md:order-2'>Social Risk Score</p>
                  <p className='text-3xl text-slate-800 font-bold md:order-1 md:w-[60px] md:text-2xl'>{(data.length > 0) ? Number(data[data.length-1].social).toFixed(0) : '-'}</p>
                </div>
                <div className='w-full flex flex-col md:flex-row md:gap-[10px] md:items-center'>
                  <p className='text-sm md:order-2'>Governance Risk Score</p>
                  <p className='text-3xl text-slate-800 font-bold md:order-1 md:w-[60px] md:text-2xl'>{(data.length > 0) ? Number(data[data.length-1].governance).toFixed(0) : '-'}</p>
                </div>
              </div>
            </div>
            <div className='h-fit w-full flex flex-col gap-[5px] p-[10px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
              <div>
                <p className='font-medium'>ESG Risk Scores History {company ? <span>of <span className='text-emerald-500'>{company}</span></span> : ''}</p>
                <p className='text-slate-500'>These scores typically range from 0 to 100. The higher the score the better.</p>
              </div>
              <div className='h-[400px] w-full overflow-y-scroll hide-scrollbar'>
                <ReactEChart option={chartOption} showLoading={loading} style={{height: '100%', width: '100%', minWidth: '420px'}}/>
              </div>
            </div>
          </div>

          {/* top 21 list */}
          <div className={`${displayList ? 'scale-100 h-fit w-full opacity-100' : 'scale-0 h-0 w-0 opacity-0'} flex bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl origin-top-right duration-500`}>
            <div className='h-fit w-full flex flex-col gap-[10px] p-[10px]'>
              {/* <div className='h-fit w-full flex items-center flex-wrap gap-[10px]'>
                <p className='md:text-sm'>Sort By:</p>
                <button className='h-[40px] w-fit px-[5px] bg-slate-100 border border-slate-300 rounded-md flex items-center justify-center gap-[5px] cursor-pointer duration-200 hover:opacity-50 md:text-sm md:h-[30px]'>ESG<LuArrowUpDown size={16}/></button>
                <button className='h-[40px] w-fit px-[5px] bg-slate-100 border border-slate-300 rounded-md flex items-center justify-center gap-[5px] cursor-pointer duration-200 hover:opacity-50 md:text-sm md:h-[30px]'>Governance<LuArrowUpDown size={16}/></button>
                <button className='h-[40px] w-fit px-[5px] bg-slate-100 border border-slate-300 rounded-md flex items-center justify-center gap-[5px] cursor-pointer duration-200 hover:opacity-50 md:text-sm md:h-[30px]'>Environment<LuArrowUpDown size={16}/></button>
                <button className='h-[40px] w-fit px-[5px] bg-slate-100 border border-slate-300 rounded-md flex items-center justify-center gap-[5px] cursor-pointer duration-200 hover:opacity-50 md:text-sm md:h-[30px]'>Social<LuArrowUpDown size={16}/></button>
              </div> */}
              <p className='font-semibold'>Top 21 Companies in Hong Kong</p>
              <div className='h-fit w-full grid grid-cols-2 gap-[10px] xxl:grid-cols-1'>
                {listData.map((e, i) => (
                  <div key={i} onClick={() => {setDisplayList(false); esgDataAPI({ setLoading, setData, symbol: e.symbol, setError }); esgCompanyNameAPI({ setCompany, symbol: e.symbol });}} className='h-full w-full p-[10px] border border-slate-200 rounded-lg flex gap-[10px] cursor-pointer duration-200 hover:opacity-50'>
                    <div className='h-full flex flex-col items-center justify-center px-[20px] md:px-[10px] sm:hidden'>
                      <p className='font-medium'>ESG</p>
                      <p className='text-3xl font-bold'>{e.esg ? Number(e.esg).toFixed(0) : '-'}</p>
                    </div>
                    <div className='h-full flex-1 flex flex-col justify-center gap-[5px]'>
                      <p className='md:text-sm'>{e.company} <span className='text-slate-500'>{'(' + e.symbol + ')'}</span></p>
                      <div className='grid grid-cols-3 text-slate-500 md:grid-cols-1'>
                        <div className='w-full hidden flex-col sm:flex md:flex-row md:gap-[5px] md:items-center'>
                          <p className='text-sm'>ESG</p>
                          <p className='text-slate-800 font-bold'>{e.esg ? Number(e.esg).toFixed(0) : '-'}</p>
                        </div>
                        <div className='w-full flex flex-col md:flex-row md:gap-[5px] md:items-center'>
                          <p className='text-sm'>Environment</p>
                          <p className='text-slate-800 font-bold'>{e.environment ? Number(e.environment).toFixed(0) : '-'}</p>
                        </div>
                        <div className='w-full flex flex-col md:flex-row md:gap-[5px] md:items-center'>
                          <p className='text-sm'>Social</p>
                          <p className='text-slate-800 font-bold'>{e.social ? Number(e.social).toFixed(0) : '-'}</p>
                        </div>
                        <div className='w-full flex flex-col md:flex-row md:gap-[5px] md:items-center'>
                          <p className='text-sm'>Governance</p>
                          <p className='text-slate-800 font-bold'>{e.governance ? Number(e.governance).toFixed(0) : '-'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search