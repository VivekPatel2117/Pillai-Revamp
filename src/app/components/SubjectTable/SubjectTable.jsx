"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function SubjectTable({ data, subject, isLoading, isAdmin }) {
  const [editMode, setEditMode] = useState({
    courseDesc: false,
    courseVision: false,
    courseMission: false,
    FY: false,
    SY: false,
    TY: false,
    coursePdf: false
  });

  const [formData, setFormData] = useState({courseDesc: data.courseDesc,
    courseVision: data.courseVision,
    courseMission: data.courseMission,
    FY: data.FY,
    SY: data.SY,
    TY: data.TY,
    coursePdf: data.coursePdf});

  const updateDb = async (data) => {
    const response = await axios.post("/api/CourseDetails", { data, subject });
    if (response.status === 200) {
      console.log("DB updated");
    } else {
      console.log("Error while updating DB");
    }
  };

  const handleEditClick = (field) => {
    setEditMode({ ...editMode, [field]: true });
  };

  const handleSaveClick = (field) => {
    setEditMode({ ...editMode, [field]: false });
    console.log(formData);
    updateDb(formData);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleTableChange = (year, index, sem, value) => {
    const updatedYear = formData[year].map((item, idx) =>
      idx === index ? { ...item, [sem]: value } : item
    );
    setFormData({ ...formData, [year]: updatedYear });
  };

  const renderTableRows = (year) => {
    return formData[year].map((item, index) => (
      <tr key={item._id}>
        <td className="border border-black px-2 py-2">
          {editMode[year] ? (
            <input
              type="text"
              value={item.SEM1}
              onChange={(e) =>
                handleTableChange(year, index, 'SEM1', e.target.value)
              }
            />
          ) : (
            item.SEM1
          )}
        </td>
        <td className="border border-black px-2 py-2">
          {editMode[year] ? (
            <input
              type="text"
              value={item.SEM2}
              onChange={(e) =>
                handleTableChange(year, index, 'SEM2', e.target.value)
              }
            />
          ) : (
            item.SEM2
          )}
        </td>
      </tr>
    ));
  };

  return (
    <>
      {isAdmin ? (
        <div>
          <div className="section1">
            <h1 className="text-2xl font-bold mt-4">About the course - {subject}</h1>
            <hr className="w-9/12 border-t-2 border-gray-400 mb-4 mt-4" />
            <div>
              {editMode.courseDesc ? (
                <>
                  <input
                    type="text"
                    value={formData.courseDesc}
                    onChange={(e) => handleChange('courseDesc', e.target.value)}
                  />
                  <button className='saveButton' onClick={() => handleSaveClick('courseDesc')}>Save</button>
                </>
              ) : (
                <>
                  <p>{formData.courseDesc}</p>
                  <button className='editButton' onClick={() => handleEditClick('courseDesc')}>Edit</button>
                </>
              )}
            </div>
            <br />
            <button className="bg-marronDark text-white px-6 py-2 rounded-full">
              Inquire Now
            </button>
          </div>
          <div className="section2 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="left">
              <h2 className="text-xl font-bold">Vision</h2>
              <hr className="w-9/12 border-t-2 border-gray-400 mb-4 mt-4" />
              <div>
                {editMode.courseVision ? (
                  <>
                    <input
                      type="text"
                      value={formData.courseVision}
                      onChange={(e) => handleChange('courseVision', e.target.value)}
                    />
                    <button className='saveButton' onClick={() => handleSaveClick('courseVision')}>Save</button>
                  </>
                ) : (
                  <>
                    <p>{formData.courseVision}</p>
                    <button className='editButton' onClick={() => handleEditClick('courseVision')}>Edit</button>
                  </>
                )}
              </div>
            </div>
            <div className="right">
              <h2 className="text-xl font-bold">Mission</h2>
              <hr className="w-9/12 border-t-2 border-gray-400 mb-4" />
              <div>
                {editMode.courseMission ? (
                  <>
                    <input
                      type="text"
                      value={formData.courseMission}
                      onChange={(e) => handleChange('courseMission', e.target.value)}
                    />
                    <button className='saveButton' onClick={() => handleSaveClick('courseMission')}>Save</button>
                  </>
                ) : (
                  <>
                    <p>{formData.courseMission}</p>
                    <button className='editButton' onClick={() => handleEditClick('courseMission')}>Edit</button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="section3 mt-10 mb-8">
            <h1 className="font-semibold text-lg">
              List of Subjects for the Three Year {subject}
            </h1>
            <hr className="w-9/12 border-t-2 border-gray-400 mb-4" />
            <div className="subjects bg-mapBg">
              <div className="fy">
                <h1 className="flex justify-center text-2xl font-bold">
                  FY {subject} - <a href={"www.google.com"}
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-500 hover:underline">See Details</a> <br />
        {editMode.coursePdf ? (
                        <>
                        <input
                          type="text"
                          value={formData.coursePdf}
                          onChange={(e) => handleChange('coursePdf', e.target.value)}
                        />
                        <button className='saveButton' onClick={() => handleSaveClick('coursePdf')}>Save</button>
                      </>
                      ):(
                        <>
                        <button className='editButton' onClick={() => handleEditClick('coursePdf')}>Edit</button>
                        </>
                      ) }
                </h1>
                <div className="subjects max-w-screen-md mx-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="px-2 py-2">Semester I</th>
                        <th className="px-2 py-2">Semester II</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableRows('FY')}</tbody>
                  </table>
                  <button className='editButton' onClick={() => handleEditClick('FY')}>Edit</button>
                  {editMode.FY && <button className='saveButton' onClick={() => handleSaveClick('FY')}>Save</button>}
                </div>
              </div>
              <div className="sy">
                <h1 className="flex justify-center text-2xl font-bold mt-4">
                  SY {subject}
                </h1>
                <div className="subjects max-w-screen-md mx-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="px-2 py-2">Semester III</th>
                        <th className="px-2 py-2">Semester IV</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableRows('SY')}</tbody>
                  </table>
                  <button className='editButton' onClick={() => handleEditClick('SY')}>Edit</button>
                  {editMode.SY && <button className='saveButton' onClick={() => handleSaveClick('SY')}>Save</button>}
                </div>
              </div>
              <div className="ty">
                <h1 className="flex justify-center text-2xl font-bold mt-4">
                  TY {subject}
                </h1>
                <div className="subjects max-w-screen-md mx-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="px-2 py-2">Semester V</th>
                        <th className="px-2 py-2">Semester VI</th>
                      </tr>
                    </thead>
                    <tbody>{renderTableRows('TY')}</tbody>
                  </table>
                  <button className='editButton' onClick={() => handleEditClick('TY')}>Edit</button>
                  {editMode.TY && <button className='saveButton' onClick={() => handleSaveClick('TY')}>Save</button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
        <div className="section1">
          <h1 className="text-2xl font-bold mt-4">About the course - {subject}</h1>
          <hr className="w-9/12 border-t-2 border-gray-400 mb-4 mt-4" />
          <div>
                <p>{formData.courseDesc}</p>
          </div>
          <br />
          <button className="bg-marronDark text-white px-6 py-2 rounded-full">
            Inquire Now
          </button>
        </div>
        <div className="section2 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="left">
            <h2 className="text-xl font-bold">Vision</h2>
            <hr className="w-9/12 border-t-2 border-gray-400 mb-4 mt-4" />
            <div>
                  <p>{formData.courseVision}</p>
            </div>
          </div>
          <div className="right">
            <h2 className="text-xl font-bold">Mission</h2>
            <hr className="w-9/12 border-t-2 border-gray-400 mb-4" />
            <div>
             <p>{formData.courseMission}</p>
            </div>
          </div>
        </div>
        <div className="section3 mt-10 mb-8">
          <h1 className="font-semibold text-lg">
            List of Subjects for the Three Year {subject}
          </h1>
          <hr className="w-9/12 border-t-2 border-gray-400 mb-4" />
          <div className="subjects bg-mapBg">
            <div className="fy">
              <h1 className="flex justify-center text-2xl font-bold">
                FY {subject} - <a href={"www.google.com"}
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-500 hover:underline">See Details</a> <br />
      <p>{formData.coursePdf}</p>
              </h1>
              <div className="subjects max-w-screen-md mx-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-2 py-2">Semester I</th>
                      <th className="px-2 py-2">Semester II</th>
                    </tr>
                  </thead>
                  <tbody>{renderTableRows('FY')}</tbody>
                </table>
              </div>
            </div>
            <div className="sy">
              <h1 className="flex justify-center text-2xl font-bold mt-4">
                SY {subject}
              </h1>
              <div className="subjects max-w-screen-md mx-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-2 py-2">Semester III</th>
                      <th className="px-2 py-2">Semester IV</th>
                    </tr>
                  </thead>
                  <tbody>{renderTableRows('SY')}</tbody>
                </table>
              </div>
            </div>
            <div className="ty">
              <h1 className="flex justify-center text-2xl font-bold mt-4">
                TY {subject}
              </h1>
              <div className="subjects max-w-screen-md mx-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-2 py-2">Semester V</th>
                      <th className="px-2 py-2">Semester VI</th>
                    </tr>
                  </thead>
                  <tbody>{renderTableRows('TY')}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  );
}
