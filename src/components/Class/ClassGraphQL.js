import "./Class.css";
import React, {useState, useEffect} from "react";

function ClassGraphQL(props) {

    const [classInfo, setClassInfo] = useState({});

    const url = "https://api.peterportal.org/graphql"

    useEffect(() => {
        const fetchData = async () => {
            const query = `
                query {
                    course(id:"${props.name}") {
                        title
                        department_name
                        description
                    }
                }
            `

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({query}), 
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            setClassInfo(data.data.course);
        }
        fetchData();
    }, [props.name]);
    let info;

    if(classInfo) {
        info = <div className="information">
            <h2>Course Name</h2>
            <p id="title">{classInfo.title}</p>
            <h2>Department</h2>
            <p id="department" >{classInfo.department_name}</p>
            <h2>Description</h2>
            <p id="description">{classInfo.description}</p>
        </div>
    } else if (classInfo == null) {
        info = <p>Class Not Found</p>
    } else {
        info = <p>Loading...</p>
    }

    return (
        <div className="class">
            <h1>{props.name}</h1>
            <div className="info">
                {info}
            </div>
        </div>
    )
}

export default ClassGraphQL;
