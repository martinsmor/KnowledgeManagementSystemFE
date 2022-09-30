import profilePic from "../../assets/profile/profile.png";



function Konten(props) {


    return(
        <div className="absolute z-40 content left-[280px] top-[64px] p-8">
            <div className="flex flex-row">
                <div className="avatar mr-4">
                    <div className="w-12 rounded-full">
                        <img src={profilePic} />
                    </div>
                </div>
                <div className="flex flex-col justify-around " >
                    <div>Arya Stark</div>
                    <div className="text-sm">30 Februari 2020</div>
                </div>
            </div>

            <div>
                <h1 className="my-6 font-bold text-3xl">Pencatatan kehamilan mantan ART</h1>
                <p className="font-serif text-lg leading-8 font-light">Kehamilan yang dialami mantan ART yang sudah pindah apakah tercatat?
                    Pertanyaan ditujukan untuk rumah tangga ini, tidak ditanya terkait ART yang telah pindah (bukan ART lagi). Jadi, ketika PPL datang ke rumah tangga yang dahulu ada mantan ART (karena pindah) yang hamil 2017-2022, maka kehamilan tersebut tidak dicakup</p>
            </div>

        </div>
    );
}

export default Konten;