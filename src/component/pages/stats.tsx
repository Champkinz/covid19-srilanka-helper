import React from "react";
import { P } from "../atoms/typography";

function Stats(props: any) {
  return (
    <>
      <div className="px-6">
        <P fontWeight={400}>
          Information Gathered Date and Time :{" "}
          {props.data.data.data.update_date_time}
        </P>
      </div>
      <div className="flex flex-wrap justify-around p-5">
        <div className="w-full  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4  p-4">
          <div
            className="flex flex-col h-full justify-center items-center rounded overflow-hidden shadow-cus bg-white py-4"
            style={{ position: "relative" }}
          >
            <img
              alt=""
              src="https://static.thenounproject.com/png/2522082-200.png"
              style={{
                width: 40,
                height: "auto",
                position: "absolute",
                top: 5,
                left: 5,
              }}
            />
            <P fontSize={20}>Total Cases</P>
            <P bold fontSize={30} color="#45aaf2">
              {props.data.data.data.local_total_cases}
            </P>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4  p-4">
          <div className="flex flex-col h-full justify-center items-center rounded overflow-hidden shadow-cus bg-white py-4">
            <P fontSize={20}>Total New Cases</P>
            <P bold fontSize={30} color="#45aaf2">
              {props.data.data.data.local_new_cases}
            </P>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4  p-4">
          <div className="flex flex-col h-full justify-center items-center rounded overflow-hidden shadow-cus bg-white py-4">
            <P fontSize={20}>Total Deaths</P>
            <P bold fontSize={30} color="#45aaf2">
              {props.data.data.data.local_deaths}
            </P>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4  p-4">
          <div className="flex flex-col h-full justify-center items-center rounded overflow-hidden shadow-cus bg-white py-4">
            <P fontSize={20}>Total New Deaths</P>
            <P bold fontSize={30} color="#45aaf2">
              {props.data.data.data.local_new_deaths}
            </P>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4  p-4">
          <div className="flex flex-col h-full justify-center items-center rounded overflow-hidden shadow-cus bg-white bg-white py-4">
            <P fontSize={20}>Total Recovered</P>
            <P bold fontSize={30} color="#45aaf2">
              {props.data.data.data.local_recovered}
            </P>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4  p-4">
          <div className="flex flex-col h-full justify-center items-center rounded overflow-hidden shadow-cus bg-white py-4">
            <P fontSize={20} center>
              Suspected and in Hospital
            </P>
            <P bold fontSize={30} color="#45aaf2">
              {
                props.data.data.data
                  .local_total_number_of_individuals_in_hospitals
              }
            </P>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4  p-4">
          <div className="flex flex-col h-full justify-center items-center rounded overflow-hidden shadow-cus bg-white py-4">
            <P fontSize={20}>Total Active Cases</P>
            <P bold fontSize={30} color="#45aaf2">
              {props.data.data.data.local_active_cases}
            </P>
          </div>
        </div>
        <div className="w-full  sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4  p-4">
          <div
            className="flex flex-col h-full justify-center items-center rounded overflow-hidden shadow-cus bg-white py-4"
            style={{ position: "relative" }}
          >
            <img
              alt=""
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/1200px-Globe_icon.svg.png"
              style={{
                width: 25,
                height: "auto",
                position: "absolute",
                top: 10,
                left: 10,
              }}
            />
            <P fontSize={20}>Global Total Cases</P>
            <P bold fontSize={30} color="#45aaf2">
              {props.data.data.data.global_total_cases}
            </P>
          </div>
        </div>
      </div>
    </>
  );
}

export default Stats;
