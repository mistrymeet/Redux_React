import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Input, Table } from 'reactstrap'

function CountState({ count }) {
    let [textsearch, setTextSearch] = useState('')
    let [data, setData] = useState([])

    useEffect(() => {
        if (count.length > 0) {
            let FilterData = count?.filter?.((e) => {
                return e?.auth?.email?.toLowerCase?.()?.includes?.(textsearch?.toLowerCase?.())
            })
            setData(FilterData)
        } else {
            setData(count)
        }
    }, [count, textsearch])

    // useEffect(() => {
    //     let oldData = localStorage.getItem('userInfo')
    //     if (oldData) {
    //         let newData = JSON.parse(oldData)
    //         setData([newData])
    //     }
    // }, [])

    return (
        <>
            <div className='container'>
                <div className='flex justify-between my-6'>
                    <h1>User Info</h1>
                    <div>
                        <Input
                            type='text'
                            onChange={(e) => setTextSearch(e?.target?.value)}
                        />
                    </div>
                </div>
                {
                    data?.length > 0 ? <Table bordered>
                        <thead>
                            <tr>
                                <th>
                                    Sr No.
                                </th>
                                <th>
                                    First Name
                                </th>
                                <th>
                                    Last Name
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Password
                                </th>
                                <th>
                                    Plot No
                                </th>
                                <th>
                                    Street
                                </th>
                                <th>
                                    LandMark
                                </th>
                                <th>
                                    City
                                </th>
                                <th>
                                    State
                                </th>
                                <th>
                                    Country
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map?.((e, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">
                                                {i + 1}
                                            </th>
                                            <td>
                                                {e?.name?.first}
                                            </td>
                                            <td>
                                                {e?.name?.last}
                                            </td>
                                            <td>
                                                {e?.auth?.email}
                                            </td>
                                            <td>
                                                {e?.auth?.password}
                                            </td>
                                            <td>
                                                {e?.address1?.plotno}
                                            </td>
                                            <td>
                                                {e?.address1?.street}
                                            </td>
                                            <td>
                                                {e?.address1?.landmark}
                                            </td>
                                            <td>
                                                {e?.address2?.city}
                                            </td>
                                            <td>
                                                {e?.address2?.state}
                                            </td>
                                            <td>
                                                {e?.address2?.country}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table> : null
                }
            </div>
        </>
    )
}

const toStatetoProps = (state) => {
    return {
        count: state
    }
}

export default connect(toStatetoProps)(CountState)