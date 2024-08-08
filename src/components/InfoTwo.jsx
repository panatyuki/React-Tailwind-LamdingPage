// import React from 'react'

function InfoTwo() {
  return (
    <div className="container mx-auto flex items-center py-16">
      <div className="w-1/2 px-6">
        <h2 className="text-3xl font-semibold">Welcome to our website</h2>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quo
          explicabo accusamus labore illum repellendus, perferendis molestiae
          laboriosam voluptate totam deleniti a quisquam doloribus nostrum quis
          cupiditate suscipit natus repellat.
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-auto h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default InfoTwo;

