import React from "react";

const UserDetail = () => {
  return (
    <div className="h-screen">
      <div>
        <div className="px-2 py-5">
          <h1 className="text-xl text-pink-300 font-bold">All Users</h1>
        </div>
        <div className="w-full overflow-x-auto px-2">
            <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
                <tbody>
                <tr className="">
                    <th scope="col" className="h-12 text-md px-6 first:border-l-0 border-l border-pink-100  text-slate-700 bg-slate-100 font-bold">S.No</th>
                    <th scope="col" className="h-12 text-md px-6 first:border-l-0 border-l border-pink-100  text-slate-700 bg-slate-100 font-bold">Location Name</th>
                    <th scope="col" className="h-12 text-md px-6 first:border-l-0 border-l border-pink-100  text-slate-700 bg-slate-100 font-bold">Action</th>
                    <th scope="col" className="h-12 text-md px-6 first:border-l-0 border-l border-pink-100  text-slate-700 bg-slate-100 font-bold">Action</th>
                </tr>
                <tr>
                    <td className="border-l-0 px-6 transition duration-300 border-t h-12 border-pink-100 stroke-slate-500 text-slate-500">1.</td>
                    <td className="first:border-l-0 border-l px-6 transition duration-300 border-t h-12 border-pink-100 stroke-slate-500 ">Name</td>
                    <td className="first:border-l-0 border-l px-6 transition duration-300 border-t h-12 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer">Edit</td>
                    <td className="first:border-l-0 border-l px-6 transition duration-300 border-t h-12 border-pink-100 stroke-slate-500 text-slate-500 text-green-500 cursor-pointer">Delete</td>
                </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
