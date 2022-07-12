import React, { useState } from "react";
import collegeService from "../service/collegeService";
import "./Registration.css"


const Registration = () => {

    const [collegeInfo, setCollegeInfo] = useState({
        college_Name: "",
        college_Id: "",
        college_Email: "",
        college_Mobile: "",
        college_State: ""
    });


    const onSubmitform = (e) => {
        e.preventDefault();
        collegeService.newCollegeRegistartion(collegeInfo).then((e) => (console.log(e)));
        alert("You are successfully Registared College ... !!");
    }

    return (
        <div className="card">
            <h1>New college Registration</h1>

            <form onSubmit={onSubmitform} autoComplete="off">
                <div className="row mb-3">
                    <label htmlFor="collegeName" className="col-sm-2 col-form-label">College Name</label>
                    <div className="col-sm-10">
                        <input id="collegeName" className="form-control" type="text" name="college_Name" placeholder="College Name" onChange={(e) => setCollegeInfo({ ...collegeInfo, college_Name: e.target.value })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="collegeId" className="col-sm-2 col-form-label">College RegistrationNumber </label>
                    <div className="col-sm-10">
                        <input id="collegeId" className="form-control" type="tel" name="college_Id" placeholder="RegistrationNumber" onChange={(e) => setCollegeInfo({ ...collegeInfo, college_Id: e.target.value })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="collegeEmail" className="col-sm-2 col-form-label">College Email</label>
                    <div className="col-sm-10">
                        <input id="collegeEmail" className="form-control" type="email" name="college_Email" placeholder="College Email " onChange={(e) => setCollegeInfo({ ...collegeInfo, college_Email: e.target.value })} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="collegeMobile" className="col-sm-2 col-form-label">College MobileNumber</label>
                    <div className="col-sm-10">
                        <input id="collegeMobile" className="form-control" type="tel" name="college_Mobile" placeholder="College MobileNumber" onChange={(e) => setCollegeInfo({ ...collegeInfo, college_Mobile: e.target.value })} />
                    </div>
                </div>
                <div className="row mb-3">

                    <label htmlFor="collegeState" className="col-sm-2 col-form-label">College State</label>
                    <div className="col-sm-10">
                        <input id="collegeState" className="form-control" type="text" name="college_State" placeholder="College State" onChange={(e) => setCollegeInfo({ ...collegeInfo, college_State: e.target.value })} />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">ADD COLLEGE</button>
            </form>
        </div>
    )
}

export default Registration;