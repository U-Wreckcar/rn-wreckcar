'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WSearch from './WSearch';
import WTable from './WTable';
import WChart from './WChart';
import Winfo from './Winfo';
export default function WorkSpace() {
  const [items, setItems] = useState();
  const listData = async () => {
    const result: any = await axios.get('http://localhost:4001/getData');
    if (result !== undefined) {
      setItems(result);
    }
    console.log(result);
  };
  useEffect(() => {
    listData();
  }, []);
  return (
    <>
      <h1>WorkSpace</h1>
      <WSearch />
      <Winfo />
      <WChart />
      <WTable />
    </>
  );
}
