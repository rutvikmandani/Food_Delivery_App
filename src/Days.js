import React from "react";

const Days = () => {

    const allData  = [
        {
            "_id": "6244302cceee5800045bf344",
            "name": "A Virtual Experience on the Mount of Olives",
            "desc": "",
            "startDate": "2021-10-19T18:30:00.000Z",
            "timeline": [],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/6053e50a5a01c10004dfe159/628f7846acc9bd00045df096_img",
            "coverBackgroundColor": ""
        },
        {
            "_id": "624c37eb83a21c00040168a0",
            "name": "New method",
            "desc": "",
            "startDate": "2022-04-05",
            "timeline": [
                "2022-05-31T18:30:00.000Z",
                "2022-06-01T18:30:00.000Z",
                "2022-06-02T18:30:00.000Z",
                "2022-06-03T18:30:00.000Z",
                "2022-06-04T18:30:00.000Z",
                "2022-06-05T18:30:00.000Z",
                "2022-06-06T18:30:00.000Z",
                "2022-06-07T18:30:00.000Z",
                "2022-06-08T18:30:00.000Z"
            ],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/defaultCoverImages/cover-image-1.jpeg",
            "coverBackgroundColor": null
        },
        {
            "_id": "624edec88e16f000048c6959",
            "name": "testing purpose",
            "desc": "",
            "startDate": "2022-04-07",
            "timeline": [
                "2022-06-06T20:00:00.000Z",
                "2022-06-07T20:00:00.000Z",
                "2022-06-08T20:00:00.000Z",
                "2022-06-09T20:00:00.000Z",
                "2022-06-10T20:00:00.000Z",
                "2022-07-10T20:00:00.000Z",
                "2022-07-11T20:00:00.000Z",
                "2022-07-12T20:00:00.000Z",
                "2022-07-13T20:00:00.000Z",
                "2022-07-14T20:00:00.000Z",
                "2022-07-15T20:00:00.000Z",
                "2022-08-13T20:00:00.000Z",
                "2022-08-14T20:00:00.000Z",
                "2022-08-15T20:00:00.000Z",
                "2022-08-16T20:00:00.000Z",
                "2022-08-17T20:00:00.000Z",
                "2022-08-18T20:00:00.000Z",
                "2022-09-11T20:00:00.000Z",
                "2022-09-12T20:00:00.000Z",
                "2022-09-13T20:00:00.000Z",
                "2022-09-14T20:00:00.000Z",
                "2022-09-15T20:00:00.000Z"
            ],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/6053e50a5a01c10004dfe159/628b74472041220004f8de17_img",
            "coverBackgroundColor": ""
        },
        {
            "_id": "625fe0d1da9f0d0004f013ed",
            "name": "00 Vijay test",
            "desc": "",
            "startDate": "2022-04-20",
            "timeline": [
                "2022-06-01T18:30:00.000Z",
                "2022-06-02T18:30:00.000Z",
                "2022-06-03T18:30:00.000Z"
            ],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/6053e50a5a01c10004dfe159/627cdfead9af610004e66eec_img",
            "coverBackgroundColor": ""
        },
        {
            "_id": "6278a6fba637c30004c5f2c3",
            "name": "Charge test",
            "desc": "",
            "startDate": "2022-05-09",
            "timeline": [
                "2022-06-08T20:00:00.000Z",
                "2022-06-09T20:00:00.000Z",
                "2022-06-10T20:00:00.000Z",
                "2022-06-11T20:00:00.000Z",
                "2022-06-12T20:00:00.000Z",
                "2022-06-13T20:00:00.000Z",
                "2022-06-14T20:00:00.000Z",
                "2022-06-15T20:00:00.000Z"
            ],
            "endDate": null,
            "is_draft": true,
            "coverImage": "",
            "coverBackgroundColor": "#E99430"
        },
        {
            "_id": "62948c4df9b4b10004b4dec9",
            "name": "A Virtual Experience on the Mount of Olives (Duplicated 1)",
            "desc": "",
            "startDate": "2021-10-19T18:30:00.000Z",
            "timeline": [],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/6053e50a5a01c10004dfe159/628f7846acc9bd00045df096_img",
            "coverBackgroundColor": ""
        },
        {
            "_id": "62948c6c40d00c00049a04ed",
            "name": "A Virtual Experience on the Mount of Olives (Duplicated 2)",
            "desc": "",
            "startDate": "2021-10-19T18:30:00.000Z",
            "timeline": [],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/6053e50a5a01c10004dfe159/628f7846acc9bd00045df096_img",
            "coverBackgroundColor": ""
        },
        {
            "_id": "6294957af9b4b10004b4df99",
            "name": "A Virtual Experience on the Mount of Olives (Duplicated 3)",
            "desc": "",
            "startDate": "2021-10-19T18:30:00.000Z",
            "timeline": [],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/6053e50a5a01c10004dfe159/628f7846acc9bd00045df096_img",
            "coverBackgroundColor": ""
        },
        {
            "_id": "62961e57ca34350004869c49",
            "name": "Charge test (Duplicated 1)",
            "desc": "",
            "startDate": "2022-05-09",
            "timeline": [
                "2022-06-08T20:00:00.000Z",
                "2022-06-09T20:00:00.000Z",
                "2022-06-10T20:00:00.000Z",
                "2022-06-11T20:00:00.000Z",
                "2022-06-12T20:00:00.000Z",
                "2022-06-13T20:00:00.000Z",
                "2022-06-14T20:00:00.000Z",
                "2022-06-15T20:00:00.000Z"
            ],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/defaultCoverImages/cover-image-4.jpeg",
            "coverBackgroundColor": ""
        },
        {
            "_id": "62961e84fcfa690004627b4b",
            "name": "Charge test (Duplicated 2)",
            "desc": "",
            "startDate": "2022-05-09",
            "timeline": [
                "2022-06-08T20:00:00.000Z",
                "2022-06-09T20:00:00.000Z",
                "2022-06-10T20:00:00.000Z",
                "2022-06-11T20:00:00.000Z",
                "2022-06-12T20:00:00.000Z",
                "2022-06-13T20:00:00.000Z",
                "2022-06-14T20:00:00.000Z",
                "2022-06-15T20:00:00.000Z"
            ],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/defaultCoverImages/cover-image-4.jpeg",
            "coverBackgroundColor": ""
        },
        {
            "_id": "62973323188c2900043b38c3",
            "name": "Test Duplicate (Duplicated 1)",
            "desc": "",
            "startDate": "2022-06-01",
            "timeline": null,
            "endDate": null,
            "is_draft": true,
            "coverImage": "",
            "coverBackgroundColor": "#0066FF"
        },
        {
            "_id": "62a345d4814f324b4ab688f2",
            "name": "A Virtual Experience on the Mount of Olives (Duplicated 1)",
            "desc": "",
            "startDate": "2021-10-19T18:30:00.000Z",
            "timeline": [],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/6053e50a5a01c10004dfe159/628f7846acc9bd00045df096_img",
            "coverBackgroundColor": ""
        },
        {
            "_id": "62566cbe67654100046e981f",
            "name": "defautCyrrency",
            "desc": "",
            "startDate": "2022-04-11T18:30:00.000Z",
            "timeline": null,
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/61fffbaa8faa1a000475b917/62590ca4129edf0004112cac_img",
            "coverBackgroundColor": ""
        },
        {
            "_id": "625d5c62b7f18300040f317e",
            "name": "Currency",
            "desc": "",
            "startDate": "2022-04-18",
            "timeline": [
                "2022-04-20T07:05:06.696Z"
            ],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/defaultCoverImages/cover-image-4.jpeg",
            "coverBackgroundColor": null
        },
        {
            "_id": "625e3e8462ad240004b9754f",
            "name": "approve check",
            "desc": "",
            "startDate": "2022-04-12T18:30:00.000Z",
            "timeline": [
                "2022-06-15T20:00:00.000Z",
                "2022-06-16T20:00:00.000Z",
                "2022-06-17T20:00:00.000Z",
                "2022-06-18T20:00:00.000Z",
                "2022-06-19T20:00:00.000Z",
                "2022-06-20T20:00:00.000Z",
                "2022-06-21T20:00:00.000Z"
            ],
            "endDate": null,
            "is_draft": true,
            "coverImage": "",
            "coverBackgroundColor": "#0066FF"
        },
        {
            "_id": "625fa0adda9f0d0004f00db1",
            "name": "Vijay dev test",
            "desc": "",
            "startDate": "2022-05-10T08:40:52.261Z",
            "timeline": [
                "2022-06-14T18:30:00.000Z",
                "2022-06-15T18:30:00.000Z",
                "2022-06-16T18:30:00.000Z",
                "2022-06-17T18:30:00.000Z",
                "2022-06-18T18:30:00.000Z",
                "2022-06-19T18:30:00.000Z",
                "2022-06-20T18:30:00.000Z",
                "2022-06-21T18:30:00.000Z",
                "2022-06-22T18:30:00.000Z"
            ],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/defaultCoverImages/cover-image-4.jpeg",
            "coverBackgroundColor": null
        },
        {
            "_id": "62bd61c5f0cf640004be9ad2",
            "name": "charge issue",
            "desc": "",
            "startDate": "2022-06-30",
            "timeline": null,
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/defaultCoverImages/cover-image-4.jpeg",
            "coverBackgroundColor": null
        },
        {
            "_id": "62bd9e34f0cf640004be9c2c",
            "name": "scroll issue",
            "desc": "",
            "startDate": "2022-06-30",
            "timeline": [
                "2022-07-04T18:30:00.000Z",
                "2022-07-05T18:30:00.000Z",
                "2022-07-06T18:30:00.000Z",
                "2022-07-07T18:30:00.000Z",
                "2022-07-08T18:30:00.000Z",
                "2022-07-09T18:30:00.000Z",
                "2022-07-10T18:30:00.000Z",
                "2022-07-11T18:30:00.000Z",
                "2022-07-12T18:30:00.000Z",
                "2022-07-13T18:30:00.000Z",
                "2022-07-14T18:30:00.000Z",
                "2022-07-15T18:30:00.000Z",
                "2022-07-16T18:30:00.000Z",
                "2022-07-17T18:30:00.000Z",
                "2022-07-18T18:30:00.000Z",
                "2022-07-19T18:30:00.000Z",
                "2022-07-20T18:30:00.000Z",
                "2022-07-21T18:30:00.000Z",
                "2022-07-22T18:30:00.000Z",
                "2022-07-23T18:30:00.000Z",
                "2022-07-24T18:30:00.000Z",
                "2022-07-25T18:30:00.000Z",
                "2022-07-26T18:30:00.000Z",
                "2022-07-27T18:10:00.000Z"
            ],
            "endDate": null,
            "is_draft": true,
            "coverImage": "https://exploritycdn.s3.us-west-2.amazonaws.com/defaultCoverImages/cover-image-4.jpeg",
            "coverBackgroundColor": null
        }
    ]

    console.log("allData",allData)

    const data = {
        "startDate": "2022-07-04T18:30:00.000Z",
        "endDate": "2022-07-12T18:30:00.000Z",
        "key": "selection",
        "isChange": false
        }

    // allData?.map((el) => {
    //     console.log("el",el.id)
    // })

    const temp = []
    allData?.map((el) => {
        if(el.timeline !== null){
            console.log("new")
            for(let i = 0 ; i <= el.timeline.length; i++){
                console.log("first",new Date(el.timeline[i]))
                if(new Date(el.timeline[i]) <= new Date(data.endDate) && new Date(el.timeline[i]) >= new Date(data.startDate)){
                    return(
                        temp.push(el)
                        // console.log("same",el)
                        // console.log("same")
                        )
                        // console.log("first",el.timeline[i] === data.endDate)
                }
            }
            // (data.endDate === )
        }
        else{
            if(new Date(el.startDate) <= new Date(data.endDate) && new Date(el.startDate) >= new Date(data.startDate)){
                temp.push(el)
                // console.log("ifSame",el)
            }
        }
        console.log("temp",temp)
    })
    
    return(
        <>
    
    </>
    )


}

export default Days