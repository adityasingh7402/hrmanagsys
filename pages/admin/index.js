import Head from "next/head";
import Link from "next/link";
import ChangeNum from "./changeNum";
import { useState } from "react";
import Userss from "./Users";
import React, { useEffect } from "react";
import mongoose from "mongoose";
import { useRouter } from "next/router";

export default function Home({ orders, randomNum, selectUser, selectUsers, winnOrder, Querys }) {
  const [active, setActive] = useState("Users");
  const router = useRouter()
  return (
    <div className="overflow-hidden h-screen containerr">

      <Link href={'/'}><div className="gotoHome right-10 top-10 fixed cursor-pointer text-white p-2 bg-gray-300 font-bold text-4xl"></div></Link>
      <div className="my-8 px-5 w-full flex flex-row">
        <div className=" bg-gray-950 w-56 border border-gray-200 rounded-sm py-8 px-5 shadow-sm h-min">
          <ul className="flex flex-col">
            <li className="text-xl pb-5 font-medium text-white flex items-center"><span className="text-2xl pr-5"></span> Inventory</li>
            {/* <li onClick={() => setActive("Users")} className="text-base pb-5 font-medium cursor-pointer hover:text-red-200 text-white flex items-center"><span className="text-xl pr-5"></span> Users</li> */}
            <li onClick={() => setActive("Users")} className="text-base pb-5 font-medium cursor-pointer hover:text-red-200 text-white flex items-center"><span className="text-xl pr-5"></span> Employee</li>
            <li onClick={() => setActive("ChangeNum")} className="text-base pb-5 font-medium cursor-pointer hover:text-red-200 text-white flex items-center"><span className="text-xl pr-5"></span> Add Employee</li>
          </ul>
          <ul className="flex flex-col mt-2">
            <Link href={'/'}><li className="text-base pb-4 cursor-pointer hover:text-red-200 text-white flex items-center"><button className="px-5 py-2 border broder-white w-full rounded-full hover:bg-red-900"><p>Logout</p></button></li></Link>
          </ul>
        </div>
        <div className=" bg-white w-5/6 text-sm text-gray-800 ml-5 border border-gray-200 rounded-sm py-3 px-2 shadow-sm overflow-scroll h-screen">
          {active === "Users" && <Userss />}
          {/* {active === "Withdrawal" && <Withdrawal withdrawals={withdrawals} />} */}
          {/* {active === "AddCoin" && <AddCoin addcoins={addcoins} />} */}
          {active === "ChangeNum" && <ChangeNum randomNum={randomNum} />}
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readyState) {
//     await mongoose.connect(process.env.MONGO_URI);
//   }

//   const orders = await Order.find();
//   const withdrawals = await OrderrWi.find();
//   const addcoins = await addCoin.find();
//   const userss = await Usersss.find();
//   const Querys = await Query.find();
//   const winnOrder = await Order.find({
//      winning: "Pending"
//   });
//   let randomNum = await RandomNSchema.findOne();
//   return {
//     props: { orders: JSON.parse(JSON.stringify(orders)), randomNum: JSON.parse(JSON.stringify(randomNum)), winnOrder: JSON.parse(JSON.stringify(winnOrder)), withdrawals: JSON.parse(JSON.stringify(withdrawals)), addcoins: JSON.parse(JSON.stringify(addcoins)), userss: JSON.parse(JSON.stringify(userss)), Querys: JSON.parse(JSON.stringify(Querys)) },
//   };
// }