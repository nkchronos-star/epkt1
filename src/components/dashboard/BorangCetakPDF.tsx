import React from 'react';
import { Candidate } from '../../types';
import { Printer } from 'lucide-react';

export function BorangCetakPDF({ candidate, onClose }: { candidate: Candidate, onClose: () => void }) {
  if (!candidate) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/80 flex justify-center overflow-y-auto p-4 sm:p-8 backdrop-blur-sm">
      <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col relative my-auto">
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50 print:hidden">
          <h2 className="text-xl font-extrabold text-slate-800">Pratonton Borang Permohonan</h2>
          <div className="flex items-center gap-3">
            <button onClick={() => window.print()} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold transition shadow-sm">
              <Printer className="w-5 h-5" /> Cetak / PDF
            </button>
            <button onClick={onClose} className="bg-slate-200 hover:bg-slate-300 text-slate-700 px-5 py-2.5 rounded-xl font-bold transition">Tutup</button>
          </div>
        </div>
        
        <div className="p-8 sm:p-12 print:p-0 overflow-y-auto" id="printable-area">
           {/* HEADER */}
           <div className="text-center mb-8 border-b-2 border-slate-800 pb-6">
              <h1 className="text-2xl font-black text-slate-900 uppercase">Borang Permohonan Kemasukan</h1>
              <p className="text-slate-600 mt-1 font-medium">Sistem Permohonan Sekolah</p>
           </div>
           
           <div className="grid grid-cols-4 gap-8">
              <div className="col-span-3 space-y-6">
                  {/* CALON */}
                  <section>
                    <h3 className="bg-slate-100 p-2 font-bold text-slate-800 uppercase text-sm border-l-4 border-slate-800 mb-4">A. Butiran Pemohon</h3>
                    <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
                        <div className="col-span-2">
                            <span className="block text-slate-500 font-medium text-xs">Nama Penuh</span>
                            <span className="font-bold text-slate-900 uppercase">{candidate.name}</span>
                        </div>
                        <div>
                            <span className="block text-slate-500 font-medium text-xs">No. Kad Pengenalan</span>
                            <span className="font-bold text-slate-900">{candidate.ic}</span>
                        </div>
                        <div>
                            <span className="block text-slate-500 font-medium text-xs">Tarikh Lahir</span>
                            <span className="font-bold text-slate-900">{candidate.tarikhLahir || '-'}</span>
                        </div>
                        <div>
                            <span className="block text-slate-500 font-medium text-xs">Jantina</span>
                            <span className="font-bold text-slate-900 uppercase">{candidate.jantina || '-'}</span>
                        </div>
                        <div>
                            <span className="block text-slate-500 font-medium text-xs">Tempat Lahir</span>
                            <span className="font-bold text-slate-900 uppercase">{candidate.tempatLahir || '-'}</span>
                        </div>
                        <div className="col-span-2">
                            <span className="block text-slate-500 font-medium text-xs">Alamat</span>
                            <span className="font-bold text-slate-900 uppercase">{candidate.alamat1} {candidate.alamat2}, {candidate.poskod} {candidate.daerah}, {candidate.negeri}</span>
                        </div>
                    </div>
                  </section>
                  
                  
              </div>

              {/* GAMBAR */}
              <div className="col-span-1">
                  <div className="w-full aspect-[3/4] border-2 border-slate-300 rounded-lg overflow-hidden flex items-center justify-center bg-slate-50">
                     {candidate.gambarUrl ? (
                         <img src={candidate.gambarUrl} alt="Gambar Calon" className="w-full h-full object-cover" />
                     ) : (
                         <span className="text-xs text-slate-400 font-medium text-center px-4">Tiada Gambar</span>
                     )}
                  </div>
              </div>
           </div>
           
           {/* KELUARGA */}
           <section className="mt-8">
                <h3 className="bg-slate-100 p-2 font-bold text-slate-800 uppercase text-sm border-l-4 border-slate-800 mb-4">B. Maklumat Ibu Bapa / Penjaga</h3>
                <div className="grid grid-cols-2 gap-8 text-sm">
                    <div>
                        <span className="block font-black text-slate-900 border-b border-slate-200 pb-2 mb-3">BAPA / PENJAGA</span>
                        <div className="space-y-3">
                            <div><span className="block text-slate-500 text-xs">Nama</span> <span className="font-bold uppercase">{candidate.namaBapa || '-'}</span></div>
                            <div><span className="block text-slate-500 text-xs">No. Kad Pengenalan</span> <span className="font-bold">{candidate.icBapa || '-'}</span></div>
                            <div><span className="block text-slate-500 text-xs">No. Telefon</span> <span className="font-bold">{candidate.telefonBapa || '-'}</span></div>
                            <div><span className="block text-slate-500 text-xs">Pekerjaan</span> <span className="font-bold uppercase">{candidate.pekerjaanBapa || '-'}</span></div>
                        </div>
                    </div>
                    <div>
                        <span className="block font-black text-slate-900 border-b border-slate-200 pb-2 mb-3">IBU</span>
                        <div className="space-y-3">
                            <div><span className="block text-slate-500 text-xs">Nama</span> <span className="font-bold uppercase">{candidate.namaIbu || '-'}</span></div>
                            <div><span className="block text-slate-500 text-xs">No. Kad Pengenalan</span> <span className="font-bold">{candidate.icIbu || '-'}</span></div>
                            <div><span className="block text-slate-500 text-xs">No. Telefon</span> <span className="font-bold">{candidate.telefonIbu || '-'}</span></div>
                            <div><span className="block text-slate-500 text-xs">Pekerjaan</span> <span className="font-bold uppercase">{candidate.pekerjaanIbu || '-'}</span></div>
                        </div>
                    </div>
                </div>
           </section>

{/* AKADEMIK */}
                  <section>
                    <h3 className="bg-slate-100 p-2 font-bold text-slate-800 uppercase text-sm border-l-4 border-slate-800 mb-4 mt-6">C. Maklumat Akademik</h3>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                        <div>
                           <span className="block text-slate-500 font-bold mb-2">PBD (Akhir Tahun Darjah 5)</span>
                           <ul className="space-y-1">
                              <li>BM: <span className="font-bold">{candidate.pbd?.bm || '-'}</span></li>
                              <li>BI: <span className="font-bold">{candidate.pbd?.bi || '-'}</span></li>
                              <li>Math: <span className="font-bold">{candidate.pbd?.matematik || '-'}</span></li>
                              <li>Sains: <span className="font-bold">{candidate.pbd?.sains || '-'}</span></li>
                           </ul>
                        </div>
                        <div>
                           <span className="block text-slate-500 font-bold mb-2">PBD (Pertengahan Darjah 6)</span>
                           <ul className="space-y-1">
                              <li>BM: <span className="font-bold">{candidate.pbdD6?.bm || '-'}</span></li>
                              <li>BI: <span className="font-bold">{candidate.pbdD6?.bi || '-'}</span></li>
                              <li>Math: <span className="font-bold">{candidate.pbdD6?.matematik || '-'}</span></li>
                              <li>Sains: <span className="font-bold">{candidate.pbdD6?.sains || '-'}</span></li>
                           </ul>
                        </div>
                        <div className="col-span-2 mt-4 pt-4 border-t border-slate-100">
                           <span className="block text-slate-500 font-bold mb-2">Keputusan UPKK</span>
                           <ul className="grid grid-cols-2 gap-2">
                             <li>Al-Quran: <span className="font-bold">{candidate.upkk?.alquran || '-'}</span></li>
                             <li>Akidah: <span className="font-bold">{candidate.upkk?.akidah || '-'}</span></li>
                             <li>Sirah: <span className="font-bold">{candidate.upkk?.sirah || '-'}</span></li>
                             <li>Adab: <span className="font-bold">{candidate.upkk?.adab || '-'}</span></li>
                             <li>Jawi & Khat: <span className="font-bold">{candidate.upkk?.jawikhat || '-'}</span></li>
                             <li>Bahasa Arab: <span className="font-bold">{candidate.upkk?.bahasaarab || '-'}</span></li>
                           </ul>
                        </div>
                    </div>
                  </section>
           
           
           {/* PENGESAHAN */}
           <section className="mt-8">
                <h3 className="bg-slate-100 p-2 font-bold text-slate-800 uppercase text-sm border-l-4 border-slate-800 mb-4">D. Pengesahan</h3>
                <div className="p-4 border-2 border-slate-200 rounded-lg text-sm text-slate-700 text-justify">
                    Saya mengesahkan bahawa segala maklumat yang diberikan di dalam borang ini adalah benar dan tepat. Saya memahami bahawa permohonan ini boleh dibatalkan sekiranya terdapat maklumat palsu.
                    <div className="mt-16 grid grid-cols-2 gap-8 text-center">
                        <div>
                            <div className="border-b-2 border-slate-400 w-48 mx-auto mb-2"></div>
                            <span className="block font-bold">Tandatangan Pemohon</span>
                            <span className="text-xs text-slate-500">Tarikh: .......................................</span>
                        </div>
                        <div>
                            <div className="border-b-2 border-slate-400 w-48 mx-auto mb-2"></div>
                            <span className="block font-bold">Tandatangan Ibu Bapa / Penjaga</span>
                            <span className="text-xs text-slate-500">Tarikh: .......................................</span>
                        </div>
                    </div>
                </div>
           </section>

           <div className="mt-12 pt-8 border-t border-slate-200 text-xs text-slate-500 text-center">
              
           </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * { visibility: hidden; }
          #printable-area, #printable-area * { visibility: visible; }
          #printable-area { position: absolute; left: 0; top: 0; width: 100%; padding: 0 !important; }
        }
      `}} />
    </div>
  );
}
