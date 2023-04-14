import React, { useEffect, useState } from 'react'
import { venueArray } from './data.js'

const DateRender = () => {

    const [data, setData] = useState(venueArray)
    const [arrId, setArrId] = useState([venueArray[0].id])
    const [dataRender, setDataRender] = useState([])

    let allDate = []

    useEffect(() => {
        renderData()
    }, [arrId, setArrId])
    
    function renderData() {
        let temp = []
        arrId.map((e) => {
            data.map((val) => {
                return val.id === e && temp.push(val.children.duration)
            })
        })
        setDataRender(temp)
    }

    const heandleClick = (e) => {
        let temp = arrId?.findIndex((val) => val === e.id)
        if (temp === -1) {
            setArrId([...arrId, e.id])
        } else if (arrId.length > 1) {
            let filterArr = arrId?.filter((cul) => cul !== e.id)
            setArrId(filterArr)
        }

    }

    function filterData(a1, a2, ...rest) {
        // console.log(a1,a2,...rest)
        if (a2) {
            let temp = a2.filter((value) => { return objectSameMatch(a1, value) })
            if (rest.length === 0) { return temp }
            return filterData(temp, ...rest)
        } else {
            return a1
        }
    }

    function objectSameMatch(a1, value) {
        // console.log(a1,value)
        let matchFound = false
        for (const i of a1) {
            if (i.id === value.id) {
                matchFound = true
                break;
            }
        }
        return matchFound
    }

    allDate = filterData(...dataRender)
    return (
        <div>
            <div>
                {
                    data?.map((e) => {
                        {/* allDate.length === 0 && (allDate = temp) */}
                        return (
                            <button key={e.id} className={`iaxcfc ${arrId.includes(e.id) ? 'iaxcfcfocus' : ''}`} onClick={() => heandleClick(e)}>{e.venue}</button>
                        )
                    })
                }
            </div>
            <div className='dataRender'>
                {
                    allDate !== undefined &&
                    allDate.map((e) => {
                        return <span key={e.id}>{e.label}</span>
                    })
                }
            </div>
        </div>
    )
}

export default DateRender