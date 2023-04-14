import React, { useEffect, useState } from 'react'
import '../App.css'

const CommanTable = ({ columns, userData }) => {

    const [toggal, setToggal] = useState(false)




    toggal
        ? userData.sort(function (a, b) {
            if (a.name > b.name) {
                return -1;
            }
            if (a.name < b.name) {
                return 1;
            }
            return 0;
        })
        :
        userData.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })


    return (
        <div class="table-wrapper">
            <table class="fl-table" >
                <thead>         
                    <tr>
                        {
                            columns?.map((e, i) => {
                                return (
                                    <th key={i}>
                                        {e.title}
                                        {
                                            e.isUsericon &&
                                            <span style={{ position: 'absolute', marginTop: '-2px', width: '25px' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                </svg>
                                            </span>
                                        }
                                        {
                                            e.isUserSort &&
                                            <span style={{ position: 'absolute', marginTop: '-2px', width: '25px' }} onClick={() => setToggal(!toggal)}>
                                                {toggal ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                                    </svg>
                                                    :
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z" />
                                                    </svg>
                                                }
                                            </span>
                                        }
                                    </th>

                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        userData?.map((e, index) => {
                            return <tr key={e.id}>
                                {
                                    columns?.map((col, i) => {
                                        switch (col.type) {
                                            case "action": {
                                                return <td>{col.render(e)}</td>
                                            }
                                            case "idrender": {
                                                return <td>{index + 1}</td>
                                            }
                                            default: {
                                                return (
                                                    <td>{e[col.dataIndex]}</td>
                                                )
                                            }
                                        }
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default CommanTable

// const handlekey = (key) => {
//     if(key.keyCode === 40 || key.keyCode === 38){
//         // let tag = document.querySelector('.mentions__input')
//         // let tagId = tag.getAttribute('aria-activedescendant')
//         // let listItem = document.getElementById(tagId)
//         // listItem?.scrollIntoView({ behavior: 'smooth' })

//         let test = document.querySelector('.mentions__suggestions__item--focused')
//         test?.scrollIntoView({ behavior: 'smooth' })
//         // console.log(':::up', key);
//     }
// }
// const handlekeyUp = (key) => {
//     if(key.keyCode === 40 || key.keyCode === 38){
//         let selectEle = document.querySelector('.mentions__suggestions__item--focused')?.getAttribute('id')
//         let allItems = document.querySelectorAll('.mentions__suggestions__item')
//         let firstEle = allItems[0]?.getAttribute('id')
//         if(selectEle === firstEle){
//             let test = document.querySelector('.mentions__suggestions__item--focused')
//             test?.scrollIntoView({ behavior: 'smooth' })
//             console.log('???',firstEle,selectEle,test);
//         }
//         // console.log(':::down', key);
//     }
// }
