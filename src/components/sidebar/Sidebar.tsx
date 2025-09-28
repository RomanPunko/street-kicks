'use client';

import React, { FC, useState } from 'react';
import SidebarFilterItem from './SidebarFilterItem';
import { Button } from '../ui/button';
import { resetFilters } from '@/store/slices/filter-slice';
import { useAppDispatch, useAppSelector } from '@/hooks/app-hooks';
import { FaFilter, FaTimes } from 'react-icons/fa';
import PriceSlider from './PriceSlider';

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const typeFilters = useAppSelector((state) => state.filters.typeFilters);
  const genderFilters = useAppSelector((state) => state.filters.genderFilters);
  const [openModal, setOpenModal] = useState(false);

  const onToggle = () => {
    dispatch(resetFilters());
  };

  return (
    <>
      <div className="hidden w-[150px] lg:flex flex-col items-start pt-4 ">
        <p className="text-3xl">Фільтри</p>
        <Button className="hover:text-red-500 p-0" onClick={onToggle}>
          Очистити
        </Button>
        <SidebarFilterItem
          category={'Стать'}
          categoryItems={['Жінкам', 'Чоловікам', 'Дітям']}
          typeFilters={typeFilters}
          genderFilters={genderFilters}
        />
        <SidebarFilterItem
          category={'Тип'}
          categoryItems={['Кросівки', 'Кеди', 'Черевики', 'Шльопанці']}
          typeFilters={typeFilters}
          genderFilters={genderFilters}
        />
        <PriceSlider />
      </div>

      {/* MOBILE */}
      <div
        className="fixed bottom-4 right-4 bg-black/10 p-5 rounded-full lg:hidden"
        onClick={() => setOpenModal(true)}
      >
        <FaFilter size={26} />
      </div>
      {openModal && (
        <div
          className={
            openModal
              ? 'w-full h-screen bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3'
              : 'hidden'
          }
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">Фільтри</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  dispatch(resetFilters());
                }}
                className="text-sm text-gray-600 hover:text-red-500"
              >
                Очистити
              </button>
              <button onClick={() => setOpenModal(false)} className="p-2 rounded-md">
                <FaTimes />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className='flex flex-col md:flex-row md:gap-30'>
              <SidebarFilterItem
                category={'Стать'}
                categoryItems={['Жінкам', 'Чоловікам', 'Дітям']}
                typeFilters={typeFilters}
                genderFilters={genderFilters}
              />
              <SidebarFilterItem
                category={'Тип'}
                categoryItems={['Кросівки', 'Кеди', 'Черевики', 'Шльопанці']}
                typeFilters={typeFilters}
                genderFilters={genderFilters}
              />
            </div>
            <div>
              <p className="text-lg mb-2">Ціна</p>
              <PriceSlider />
            </div>
          </div>
          <div
            className="flex items-center justify-center pb-0.5 bg-black text-white font-bold rounded-xl w-[90%] absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            onClick={() => setOpenModal(false)}
          >
            <Button>Застосувати</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
