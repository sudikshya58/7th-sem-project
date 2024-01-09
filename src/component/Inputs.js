import React from "react";

export 
const Inputs = ({ label, type, placeH, basis = 100, ...props }) => (
    <div className={`basis-full lg:basis-[${basis}%]`}>
      {type === 'checkbox' ? (
        <div className="flex items-center">
          <input
            {...props}
            type="checkbox"
            className="mr-2 appearance-none rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium form-control  active:border-primary"
          />
          <label className="font-bold text-[#141312]">{label}</label>
        </div>
      ) : (
        <>
          <label className="mb-1 font-bold text-[#141312]">{label}</label>
          {type === 'select' ? (
            <select
              {...props}
              required
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium form-control active:border-primary"
            >
              {props.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              {...props}
              type={type}
              required
              placeholder={placeH}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium form-control active:border-primary"
            />
          )}
        </>
      )}
    </div>
  );
  
