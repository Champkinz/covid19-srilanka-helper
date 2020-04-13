import React from "react";
import { PhoneOutlined, LinkOutlined } from "@ant-design/icons";

export default function Block(props: BlockProps) {
  return (
    <div
      style={{ width: 320 }}
      className="m-4 rounded overflow-hidden shadow-lg"
    >
      <div
        className="flex flex-1 flex-row"
        style={{ backgroundColor: "#2ecc71" }}
      >
        <img
          style={{ width: 80, height: 80, borderRadius: 999, padding: 8 }}
          src={props.img}
          alt={props.title}
        />
        <div className="flex flex-1 flex-col items-center justify-center font-bold text-xl text-white mb-2">
          {props.title}
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{props.description}</p>
        {props.delivery && (
          <div className="flex flex-row">
            <p className="text-base text-gray-700 font-bold mt-2">Delivery</p>
            <p className="text-base text-gray-700 mt-2 pl-1">
              {props.delivery}
            </p>
          </div>
        )}
        {props.phone && (
          <div className="flex flex-row">
            <p className="text-base text-gray-700 font-bold mt-2">Phone</p>
            <p className="text-base text-gray-700 mt-2 pl-1">{props.phone}</p>
          </div>
        )}
        {props.website && (
          <div className="flex flex-row">
            <p className="text-base text-gray-700 font-bold mt-2">Website</p>
            <p className="text-base text-gray-700 mt-2 pl-1">{props.website}</p>
          </div>
        )}
        <p
          className="text-red-400 text-base"
          style={{ fontSize: 12, fontWeight: "bold" }}
        >
          {props.warning}
        </p>
      </div>
      {props.phone && (
        <a href={`tel:${props.phone}`}>
          <div className="flex justify-start h-10 items-center bg-blue-500 rounded-full px-3 py-1 mx-6">
            <PhoneOutlined style={{ color: "white" }} />
            <p className="text-white pl-2 font-bold truncate">
              Tap here to Call {props.phone}
            </p>
          </div>
        </a>
      )}
      {props.website && (
        <a href={`//${props.website}`} target="_blank">
          <div className="flex justify-start h-10 items-center bg-blue-500 rounded-full px-3 py-1 mx-6 mt-2">
            <LinkOutlined style={{ color: "white" }} />
            <p className="text-white pl-2 font-bold truncate">
              Tap here to Visit {props.website}
            </p>
          </div>
        </a>
      )}
      <div className="px-6 py-4">
        {props.tags?.map((item, index) => (
          <span
            key={index}
            className="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export interface BlockProps {
  title?: string;
  img?: string;
  description?: string;
  warning?: string;
  tags?: string[];
  phone?: string;
  website?: string;
  delivery?: string;
}
