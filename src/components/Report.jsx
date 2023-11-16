import React, { useState, useEffect, createRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactEChart from 'echarts-for-react'
import pdfMake from 'pdfmake/build/pdfmake';
import vfsFonts from 'pdfmake/build/vfs_fonts';
import moment from 'moment/moment';
import { FormControl, TextField, Button } from '@mui/material'

import { categories, unit_types } from '../local'
import logo from '../assets/logo.png'
import noImage from '../assets/noImage.jpg'
import useFetchData from '../hooks/useFetchData'

const Report = ({ setCurrentRoute, loginStatus }) => {
    let ref = createRef()

    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(false)
    const [encodedImage, setEncodedImage] = useState({ pie: '' })
    const [company, setCompany] = useState({ name: '', publishDate: moment().format('Do MMMM YYYY'), logoImg: '', welcomeImg: '', aboutDescription: '', aboutImg: '', letterDescription: '', letterImg: '', letterSignatureImg: '', letterCEOName: '', themeDescription: '', themeImg: '' })
    const [environmental, setEnvironmental] = useState({  })
    const [social, setSocial] = useState({  })
    const [governance, setGovernance] = useState({  })
    
    // const fetch = useFetchData({ refresh })
    // const [loading, data, chartCF, chartSector] = fetch

    // useEffect(() => {
    //     setCurrentRoute('report')
    //     document.getElementById('global-container').scrollTo({ top: 0, behavior: "smooth" })
    // }, [])

    // useEffect(() => {
    //     if (loginStatus.login === false) {
    //         navigate('/')
    //     } else {
    //         if (loginStatus.plan === 'none') {
    //             navigate('/pricing')
    //         }
    //     }
    // }, [loginStatus.login, loginStatus.plan])
    
    // process to create custom report
    // 1. let user provide inputs
    // 2. create an empty array for pdf
    // 3. one by one run conditions and push data to the array accordingly
    // 4. display or download the pdf
    // const handleDownloadPDF = () => {
    //     // setEncodedImage({ pie: ref.getEchartsInstance().getDataURL() });
    //     // const pieBase64 = ref.getEchartsInstance().getDataURL()
    //     const {vfs} = vfsFonts.pdfMake;
    //     pdfMake.vfs = vfs;

    //     let docOptions = {
    //         content: [
    //         ],
    //         styles: {
    //             header: {
    //                 fontSize: 20,
    //                 bold: true,
    //                 margin: [0, 0, 0, 10]
    //             },
    //         },
    //         defaultStyle: {
    //             fontSize: 14,
    //             alignment: 'justify'
    //         }
    //     };

    //     if (company.logoImg !== '') {
    //         docOptions.content.push({
    //             image: company.logoImg,
    //             fit: [100, 100],
    //             margin: [0, 0, 0, 20]
    //         })
    //     }
    //     if (company.welcomeImg !== '') {
    //         docOptions.content.push({
    //             image: company.welcomeImg,
    //             fit: [520, 520],
    //             alignment: 'center'
    //         })
    //     }
    //     docOptions.content.push({
    //         text: 'Environmental, Social, and\nGovernance (ESG) Report',
    //         fontSize: 24,
    //         bold: true,
    //         margin: [0, 20, 0, 5]
    //     })
    //     docOptions.content.push({
    //         text: company.publishDate,
    //         fontSize: 12,
    //         pageBreak: 'after'
    //     })
        
    //     pdfMake.createPdf(docOptions).open()
    // }
    
    const handleCompanyImageChange = (e) => {
        e.preventDefault()
        const fieldName = e.target.getAttribute("name");

        if (e) {
            const data = new FileReader()
            data.addEventListener('loadend', () => {
                const newFormData = { ...company };
                newFormData[fieldName] = data.result;
                setCompany(newFormData)
            })
            data.readAsDataURL(e.target.files[0])
        }
    }

    const emissionsPieChartOption = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
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
                animation: false,
                data: [10, 20, 50, 30],
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{d}%'
                },
                emphasis: {
                itemStyle: {
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
                label: {
                    show: true,
                    fontWeight: 'bold',
                }
                }
            }
        ]
    };

    return (
        <>
            {/* dashboard */}
            <div className='h-fit min-h-[calc(100%-80px)] w-full bg-slate-100 flex justify-center mobile:min-h-[calc(100%-60px)]'>
                <div className='h-fit w-full max-w-[1700px] py-[20px] px-[20px] flex flex-col gap-[20px] md:px-0'>
                    {/* top */}
                    <div className='h-fit w-full flex flex-col items-start justify-between md:px-[20px]'>
                        <p className='text-2xl font-bold leading-tight'>ESG Report</p>
                        {/* <p className='text-base leading-tight'>Please provide your company details by filling up the form.</p> */}
                    </div>
                    
                    {/* <div className='h-fit w-full bg-white rounded-xl p-[10px] shadow-md flex flex-col items-start gap-[10px]'>
                        ---------- general details of the company ----------
                        <p className='text-base leading-tight font-medium'>General Details</p>
                        <FormControl style={{ width: '100%' }}><TextField label="Company Name" placeholder='Carb0nomics' type='text' size='small' inputMode='text' value={company.name} onChange={e => { setCompany({ ...company, name: e.target.value }) }}/></FormControl>
                        <div className={`h-fit w-full grid grid-cols-[1fr_80px] gap-[10px]`}>
                            <FormControl style={{ width: '100%' }}><TextField label="Company Logo" type='file' size='small' name='logoImg' inputProps={{ accept:"image/*", style: { opacity: (company.logoImg === '') ? 0 : 1 } }} onChange={e => handleCompanyImageChange(e)}/></FormControl>
                            <img src={(company.logoImg === '') ? noImage : company.logoImg} alt="Try another" className='h-[80px] w-[80px] object-contain border-none outline-none rounded-lg shadow-md' />
                        </div>
                        <div className={`h-fit w-full grid grid-cols-[1fr_80px] gap-[10px]`}>
                            <FormControl style={{ width: '100%' }}><TextField label="Welcome Page Image" type='file' size='small' name='welcomeImg' inputProps={{ accept:"image/*", style: { opacity: (company.welcomeImg === '') ? 0 : 1 } }} onChange={e => handleCompanyImageChange(e)}/></FormControl>
                            <img src={(company.welcomeImg === '') ? noImage : company.welcomeImg} alt="Try another" className='h-[80px] w-[80px] object-contain border-none outline-none rounded-lg shadow-md' />
                        </div>
                        <FormControl style={{ width: '100%' }}><TextField label="About your company" placeholder="Type about your company here" type='text' size='small' inputMode='text' multiline minRows={1} maxRows={4} value={company.aboutDescription} onChange={e => { setCompany({ ...company, aboutDescription: e.target.value }) }}/></FormControl>
                        <div className={`h-fit w-full grid grid-cols-[1fr_80px] gap-[10px]`}>
                            <FormControl style={{ width: '100%' }}><TextField label="Company Image" type='file' size='small' name='aboutImg' inputProps={{ accept:"image/*", style: { opacity: (company.aboutImg === '') ? 0 : 1 } }} onChange={e => handleCompanyImageChange(e)}/></FormControl>
                            <img src={(company.aboutImg === '') ? noImage : company.aboutImg} alt="Try another" className='h-[80px] w-[80px] object-contain border-none outline-none rounded-lg shadow-md' />
                        </div>
                        <FormControl style={{ width: '100%' }}><TextField label="CEO Name" placeholder='John Doe' type='text' size='small' inputMode='text' value={company.letterCEOName} onChange={e => { setCompany({ ...company, letterCEOName: e.target.value }) }}/></FormControl>
                        <FormControl style={{ width: '100%' }}><TextField label="Letter from the CEO" placeholder="Type the letter form the CEO here" type='text' size='small' inputMode='text' multiline minRows={1} maxRows={4} value={company.letterDescription} onChange={e => { setCompany({ ...company, letterDescription: e.target.value }) }}/></FormControl>
                        <div className={`h-fit w-full grid grid-cols-[1fr_80px] gap-[10px]`}>
                            <FormControl style={{ width: '100%' }}><TextField label="CEO Image" type='file' size='small' name='letterImg' inputProps={{ accept:"image/*", style: { opacity: (company.letterImg === '') ? 0 : 1 } }} onChange={e => handleCompanyImageChange(e)}/></FormControl>
                            <img src={(company.letterImg === '') ? noImage : company.letterImg} alt="Try another" className='h-[80px] w-[80px] object-contain border-none outline-none rounded-lg shadow-md' />
                        </div>
                        <div className={`h-fit w-full grid grid-cols-[1fr_80px] gap-[10px]`}>
                            <FormControl style={{ width: '100%' }}><TextField label="CEO Signature Image" type='file' size='small' name='letterSignatureImg' inputProps={{ accept:"image/*", style: { opacity: (company.letterSignatureImg === '') ? 0 : 1 } }} onChange={e => handleCompanyImageChange(e)}/></FormControl>
                            <img src={(company.letterSignatureImg === '') ? noImage : company.letterSignatureImg} alt="Try another" className='h-[80px] w-[80px] object-contain border-none outline-none rounded-lg shadow-md' />
                        </div>
                        <FormControl style={{ width: '100%' }}><TextField label="Your Company's key ESG themes & Focus areas" placeholder="Type your company's key ESG themes & focus areas here" type='text' size='small' inputMode='text' multiline minRows={1} maxRows={4} value={company.themeDescription} onChange={e => { setCompany({ ...company, themeDescription: e.target.value }) }}/></FormControl>
                        <div className={`h-fit w-full grid grid-cols-[1fr_80px] gap-[10px]`}>
                            <FormControl style={{ width: '100%' }}><TextField label="Image related to your company's key ESG themes & Focus areas" type='file' size='small' name='themeImg' inputProps={{ accept:"image/*", style: { opacity: (company.themeImg === '') ? 0 : 1 } }} onChange={e => handleCompanyImageChange(e)}/></FormControl>
                            <img src={(company.themeImg === '') ? noImage : company.themeImg} alt="Try another" className='h-[80px] w-[80px] object-contain border-none outline-none rounded-lg shadow-md' />
                        </div>


                        ---------- general details of the company ----------
                        <div className='h-fit w-full grid grid-cols-2 gap-[10px]'>
                            <Button variant='outlined' size='large' color='primary' onClick={() => handleDownloadPDF()}>View PDF</Button>
                            <Button variant='contained' size='large' color='primary'>Download PDF</Button>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Report