// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import moment from 'moment/moment'
// import ReactEChart from 'echarts-for-react'

// import { actionPlanAPI } from '../hooks/functions'
// import useFetchData from '../hooks/useFetchData'

// const ActionPlan = ({ setCurrentRoute, loginStatus }) => {
//   const navigate = useNavigate()
//   const [categories, setCategories] = useState([])
//   const [resultChart, setResultChart] = useState([])
//   const [totalEmission, setTotalEmission] = useState(0)
//   const [totalReduction, setTotalReduction] = useState([{name: 'Electricity', value: '634.5', percent: 0, number: 0}])
//   const [refresh, setRefresh] = useState(false)
  
//   const fetch = useFetchData({ refresh })
//   const [loading, data, chartSector] = fetch

//   useEffect(() => {
//     setCurrentRoute('actionplan')
//   }, [])

//   useEffect(() => {
//     if (loginStatus.login === false) {
//       navigate('/')
//     }
//   }, [loginStatus.login])

//   useEffect(() => {
//     if (data.data && data.data.length > 0) {
//         const list = data.data
//         const sameCategories = Array.from(new Set(list.map(e => e.category)))
//         let final = []
//         for (let i = 0; i < sameCategories.length; i++) {
//             const tempEmission = list.filter(f => f.category === sameCategories[i])
//             final.push({ name: sameCategories[i], value: tempEmission.map(e => e.co2e).reduce((a, c) => a + c, 0).toFixed(1) })
//         }
//         setTotalEmission(Number(final.map(e => Number(e.value)).reduce((a, c) => a + c, 0).toFixed(0)))
//         setCategories(final)
//         setTotalReduction(final.map(e => {return {...e, percent: 0, number: 0}}));
//         console.log(final.map(e => {return {...e, percent: 0, number: 0}}));
//     } else {
//         setCategories([])
//     }

//     if (data.target) {
//         const temp = data.target.find(f => f.category === 'Total')
//         if (temp) {
//             setTotalReduction({ percent: temp.percent, number: temp.value })
//         }
//     }
//   }, [data])

//   useEffect(() => {
//     if (categories.length > 0) {
//         const res = categories.map(e => {
//             const temp = data?.target?.find(f => f.category === e.name)
//             if (temp) {
//                 return { name: e.name, value: (temp.percent) ? Number(e.value)-(Number(e.value)*temp.percent/100) : Number(e.value)-temp.value }
//             } else {
//                 return { name: e.name, value: Number(e.value) }
                
//             }
//         })

//         setResultChart(res)
//     }
//   }, [categories])

//   const emissionsPieChartOption = {
//     tooltip: {
//       trigger: 'item',
//       formatter: '{a} <br/>{b} : {c} ({d}%)'
//     },
//     toolbox: {
//       feature: {
//         saveAsImage: { show: true }
//       }
//     },
//     legend: {
//       left: 'center'
//     },
//     series: [
//       {
//         name: 'Emissions By',
//         type: 'pie',
//         radius: '90%',
//         percentPrecision: 0,
//         data: (categories.length > 0) ? categories : [],
//         label: {
//             show: true,
//             position: 'inside',
//             formatter: '{d}%'
//         },
//         emphasis: {
//           itemStyle: {
//             shadowBlur: 5,
//             shadowOffsetX: 0,
//             shadowColor: 'rgba(0, 0, 0, 0.5)'
//           },
//           label: {
//             show: true,
//             fontWeight: 'bold',
//           }
//         }
//       }
//     ]
//   };

//   const newEmissionsPieChartOption = {
//     tooltip: {
//       trigger: 'item',
//       formatter: '{a} <br/>{b} : {c} ({d}%)'
//     },
//     toolbox: {
//       feature: {
//         saveAsImage: { show: true }
//       }
//     },
//     legend: {
//       left: 'center'
//     },
//     series: [
//       {
//         name: 'Emissions By',
//         type: 'pie',
//         radius: '90%',
//         percentPrecision: 0,
//         data: resultChart,
//         label: {
//             show: true,
//             position: 'inside',
//             formatter: '{d}%'
//         },
//         emphasis: {
//           itemStyle: {
//             shadowBlur: 5,
//             shadowOffsetX: 0,
//             shadowColor: 'rgba(0, 0, 0, 0.5)'
//           },
//           label: {
//             show: true,
//             fontWeight: 'bold',
//           }
//         }
//       }
//     ]
//   };
//   console.log(totalReduction);

//   const CategoryComponent = ({ cat, totalReduction, setTotalReduction }) => {
    
//     // useEffect(() => {
//         // const any = () => {
//         //     let temporary = ''

//         //     if (data.target) {
//         //         // temporary = data.target
//         //     }
            
//         //     if (data.target !== temporary) {
//         //         console.log('ds');
//         //         console.log(data.target);
//         //         temporary = data.target
//                 // const temp = data.target.find(f => f.category === cat.name)
//                 // if (temp) {
//                 //     setReduction({ percent: temp.percent, number: temp.value })
//                 // }
//         //     }
//         // }


//         console.log(data);

//         const temp = data.target.find(f => f.category === cat.name)
//         if (temp) {
//             setTotalReduction(p => {return {...p, category: cat.name, value: cat.value, percent: temp.percent, number: temp.value }})
//         }

//         // any()
//     // }, [totalReduction])

//     return (
//         <div className='h-fit w-full grid grid-cols-[1fr_100px_100px] gap-[10px] items-center border-b border-b-slate-300 py-[5px]'>
//             <div>
//                 <p>{cat.name}</p>
//                 <p>{Number(cat.value).toFixed((cat.value < 1) ? 2 : 0)}</p>
//             </div>
//             <div>
//                 <p className='text-sm'>Percent</p>
//                 <input value={cat.percent} type="number" placeholder='10' className={`h-[30px] w-full px-[5px] border-2 border-slate-300 rounded-md bg-white focus:outline-none focus-visible:border-slate-600`}
//                     onChange={e => setTotalReduction(p => {return{...p, name: p.name, value: p.value, percent: e.target.value, number: (cat.value*e.target.value)/100}})}
//                     onBlur={e => {(e.target.value) ? actionPlanAPI({ category: cat.name, percent: Number(e.target.value), value: 0 }) : actionPlanAPI({ category: cat.name, percent: 0, value: 0 });} }
//                 />
//             </div>
//             <div>
//                 <p className='text-sm'>Value</p>
//                 <input value={cat.value} type="number" placeholder='10' className={`h-[30px] w-full px-[5px] border-2 border-slate-300 rounded-md bg-white focus:outline-none focus-visible:border-slate-600`}
//                     onChange={e => setTotalReduction(p => {return {...p, name: p.name, value: p.value, percent: (100 - (cat.value - e.target.value)/cat.value*100).toFixed(0), number: e.target.value}})}
//                     onBlur={e => {(e.target.value) ? actionPlanAPI({ category: cat.name, percent: 0, value: Number(e.target.value) }) : actionPlanAPI({ category: cat.name, percent: 0, value: 0 });} }
//                 />
//             </div>
//         </div>
//     )
//   }

//   return (
//     <div className='h-fit min-h-[calc(100%-60px)] w-full bg-slate-200 flex justify-center'>
//         <div className='h-fit w-full max-w-[1700px] p-[20px] flex flex-col gap-[20px]'>
//             {/* top */}
//             <p className='text-xl font-semibold sm:text-base'>Action Plan</p>

//             {/* first pie chart */}
//             <div className='h-fit w-full grid grid-cols-2 gap-[20px] lg:grid-cols-1'>
//                 <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
//                     <p className='font-medium'>Emissions by Category</p>
//                     <div className='h-[500px] w-full'>
//                         <ReactEChart option={emissionsPieChartOption} style={{height: '100%', width: '100%'}}/>
//                     </div>
//                 </div>

//                 <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
//                     <p className='font-medium'>Total Emissions {(categories.length > 0) ? '( ' + totalEmission.toFixed(0) + ' kg )' : ''}</p>
//                     <p className='font-medium'>Reduction Goals</p>
//                     <div className='h-[400px] w-full flex flex-col overflow-y-scroll fancy-scrollbar'>
//                         <div className='h-fit w-full grid grid-cols-[1fr_100px_100px] gap-[10px] items-center border-b border-b-slate-300 py-[5px]'>
//                             <p>Total</p>
//                             <div>
//                                 <p className='text-sm'>Percent</p>
//                                 <input value={totalReduction.percent} type="number" placeholder='10' className={`h-[30px] w-full px-[5px] border-2 border-slate-300 rounded-md bg-white focus:outline-none focus-visible:border-slate-600`}
//                                     onChange={e => setTotalReduction({percent: e.target.value, number: (totalEmission*e.target.value)/100})}
//                                     onBlur={e => {(e.target.value) ? actionPlanAPI({ category: 'Total', percent: Number(e.target.value), value: 0 }) : actionPlanAPI({ category: 'Total', percent: 0, value: 0 }); setRefresh(!refresh);} }
//                                 />
//                             </div>
//                             <div>
//                                 <p className='text-sm'>Value</p>
//                                 <input value={totalReduction.number} type="number" placeholder='10' className={`h-[30px] w-full px-[5px] border-2 border-slate-300 rounded-md bg-white focus:outline-none focus-visible:border-slate-600`}
//                                     onChange={e => setTotalReduction({percent: (100 - (totalEmission - e.target.value)/totalEmission*100).toFixed(0), number: e.target.value})}
//                                     onBlur={e => {(e.target.value) ? actionPlanAPI({ category: 'Total', percent: 0, value: Number(e.target.value) }) : actionPlanAPI({ category: 'Total', percent: 0, value: 0 }); setRefresh(!refresh);} }
//                                 />
//                             </div>
//                         </div>
//                         {totalReduction?.map((e, i) => (
//                             <div key={i}>
//                                 <CategoryComponent cat={e} totalReduction={totalReduction} setTotalReduction={setTotalReduction}/>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* second pie chart */}
//             <div className='h-fit w-full grid grid-cols-1 gap-[20px]'>
//                 <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl'>
//                     <p className='font-medium'>Emissions after reductions</p>
//                     <div className='h-[500px] w-full'>
//                         <ReactEChart option={newEmissionsPieChartOption} style={{height: '100%', width: '100%'}}/>
//                     </div>
//                 </div>
//             </div>

//             {/* after max width chart */}
//             <div className='h-fit w-full grid gap-[20px]'>
//                 <div className='h-full w-full flex flex-col gap-[10px] p-[20px] bg-white border border-slate-300 shadow-[0px_0px_5px_0px_#cbd5e1] rounded-xl overflow-y-scroll hide-scrollbar'>
//                     <p className='font-medium'>Emissions by each</p>
//                     <div className='h-full max-h-[500px] w-full flex flex-col gap-[10px] overflow-y-scroll fancy-scrollbar'>
//                     {data.data ? (
//                         data.data.map((e, i) => (
//                         <div className='h-fit w-full p-[10px] grid grid-cols-[1fr_50px] text-sm border border-slate-200 rounded-lg gap-[10px]' key={i}>
//                             <div className='h-fit w-full flex flex-col text-sm gap-[5px]'>
//                                 <p className='text-base leading-tight'>{e.category} <span className='text-sm text-slate-500'>"{e.sector}"</span> <span className='text-sm text-slate-500 font-semibold'>{'('}{moment(e.date).format('MMMM YYYY')}{')'}</span></p>
//                                 <div className='w-full grid grid-cols-2'>
//                                     <div className='h-fit w-full flex flex-col'>
//                                         <p className='text-slate-500'>Category</p>
//                                         <p className='text-base font-semibold'>{Number(e.activity_data.activity_value).toFixed(0)} {e.activity_data.activity_unit}</p>
//                                     </div>
//                                     <div className='h-fit w-full flex flex-col'>
//                                         <p className='text-slate-500'>Emission</p>
//                                         <p className='text-base font-semibold'>{Number(e.co2e).toFixed(0)} {e.co2e_unit}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='h-full w-full grid grid-rows-2 gap-[5px]'>
//                                 ds
//                             </div>
//                         </div> 
//                         ))
//                     ) : (<></>)}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ActionPlan

import React from 'react'

const ActionPlan = () => {
  return (
    <div>ActionPlan</div>
  )
}

export default ActionPlan