import React from "react";

function ChangeAddress({
    address,
    setAddress,
    setIsModalOpen,
}: {
    address: string;
    setAddress: Function;
    isModalOpen: boolean;
    setIsModalOpen: Function;
}) {
    const [newAddress, setNewAddress] = React.useState(address);
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">Change Address</h3>
            <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder="Enter Address"
                className="p-2 border border-gray-300"
            />
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 ">
                <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="py-2 px-3 inline-flex items-center 
                gap-x-2 text-sm font-medium rounded-lg border
                         border-gray-200 bg-white text-gray-800 shadow-sm
                          hover:bg-gray-50 focus:outline-none focus:bg-gray-50
                           disabled:opacity-50 disabled:pointer-events-none
                            dark:bg-neutral-800 dark:border-neutral-700
                             dark:text-white dark:hover:bg-neutral-700
                              dark:focus:bg-neutral-700"
                    data-hs-overlay="#hs-scale-animation-modal"
                >
                    Close
                </button>
                <button
                    onClick={() => {
                        setAddress(newAddress);
                        setIsModalOpen(false);
                    }}
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm 
                font-medium rounded-lg border border-transparent bg-red-600 text-white
                 hover:bg-red-700 focus:outline-none focus:bg-red-700
                  disabled:opacity-50 disabled:pointer-events-none"
                >
                    Save changes
                </button>
            </div>
        </div>
    );
}

export default ChangeAddress;
