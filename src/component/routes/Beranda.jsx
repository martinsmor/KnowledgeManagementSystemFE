//import state from main

import { useState, createContext, useContext } from "react";
import profilePic from "../../assets/profile/profile.png";

function Beranda(props) {

    if (props.isfull) {
        return(
            <div id="maincontent" className="absolute z-40 content flex flex-row gap-y-2 gap-x-6 left-[280px] top-[64px] p-4    ">
                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div id="maincontent1" className="absolute  z-40 content flex flex-row gap-y-2 gap-x-6 left-[80px] top-[64px] p-4">
                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-md border-[1px] rounded-md mb-6 ">
                    <div className="card-body p-4">
                        <div className="flex flex-row">
                            <div className="avatar mr-4">
                                <div className="w-10 h-10 rounded-full">
                                    <img src={profilePic} />
                                </div>
                            </div>
                            <div className="flex flex-col justify-around " >
                                <div>Arya Stark</div>
                                <div className="text-sm">30 Februari 2020</div>
                            </div>
                        </div>
                        <h2 className="card-title text-lg">Pencatatan kehamilan mantan ART</h2>
                        <p>Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat? sadfas asdfsadf asfdasf asdf    </p>
                    </div>
                </div>
            </div>
        )
    }

}
export default Beranda;