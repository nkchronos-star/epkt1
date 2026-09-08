import { Candidate } from '../../types';
import { useAppContext } from '../../store';

export default function SuratPanggilan({ candidate }: { candidate: Candidate }) {
  const { settings } = useAppContext();
  const tarikhSemasa = new Date().toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="bg-white p-6 sm:p-10 print:p-0 print:py-2 max-w-4xl mx-auto shadow-2xl printable-area text-black font-sans text-sm">
      {/* Header Surat */}
      <div className="flex items-start mb-4 border-b-2 border-black pb-2">
        <div className="flex items-center gap-4 w-full">
          <img src="https://i.postimg.cc/mrcDcHn3/logo-sma-cantik.png" alt="Jata Negara" className="w-20 h-auto object-contain " />
          <div className="flex-1 flex justify-between items-start">
            <div>
              <h1 className="font-bold text-base mb-0.5">SMA KOTA GELANGGI 3</h1>
              <p className="leading-tight uppercase text-xs">
                KOTA GELANGGI 3<br/>
                27000 JERANTUT<br/>
                PAHANG DARUL MAKMUR
              </p>
            </div>
            <div className="text-xs leading-tight mt-5">
              <p>Tel: 09-2051555</p>
              <p>E-MEL: cft2001@moe.edu.my</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-2">
        <table className="text-xs">
          <tbody>
            <tr>
              <td className="pr-2">Rujukan Kami</td>
              <td>: SMAKG03.700-2/1/1( )</td>
            </tr>
            <tr>
              <td className="pr-2">Tarikh</td>
              <td>: {settings.tarikhSuratPanggilan || tarikhSemasa}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mb-4 uppercase text-xs">
        <p>{candidate.name}</p>
        <p>{candidate.ic},</p>
        <p>{candidate.alamat1},</p>
        {candidate.alamat2 && <p>{candidate.alamat2},</p>}
        <p>{candidate.poskod} {candidate.daerah},</p>
        <p>{candidate.negeri}.</p>
      </div>

      <div className="mb-2 text-xs">
        <p>Saudara / Saudari,</p>
      </div>

      <div className="mb-3">
        <h2 className="font-bold uppercase underline text-sm">
          PANGGILAN TEMUDUGA PENGAMBILAN PELAJAR TINGKATAN 1 SESI {settings.sesiKemasukan || '2026 / 2027'}
        </h2>
      </div>

      <div className="mb-2 text-justify text-xs">
        <p className="mb-2">Sukacitanya perkara di atas adalah dirujuk.</p>
        
        <div className="mb-2 text-justify flex">
          <span className="w-8 shrink-0">1.</span>
          <span>Sehubungan perkara di atas, dengan hormatnya dimaklumkan bahawa saudara/saudari <strong>TERPILIH</strong> untuk menghadiri satu sesi temuduga seperti ketetapan berikut:</span>
        </div>

        <div className="ml-16 mb-2">
          <table className="w-full text-sm">
            <tbody>
              <tr>
                <td className="py-0.5 w-24">Tarikh</td>
                <td className="py-0.5 font-bold">: {settings.tarikhTemuduga || '8 November 2025'}</td>
              </tr>
              <tr>
                <td className="py-0.5">Hari</td>
                <td className="py-0.5 font-bold">: {settings.hariTemuduga || 'Sabtu'}</td>
              </tr>
              <tr>
                <td className="py-0.5">Masa</td>
                <td className="py-0.5 font-bold">: {settings.masaTemuduga || '8.00 pagi'}</td>
              </tr>
              <tr>
                <td className="py-0.5">Tempat</td>
                <td className="py-0.5 font-bold">: {settings.tempatTemuduga || 'Laman Selera, SMA Kota Gelanggi 3'}</td>
              </tr>
              <tr>
                <td className="py-0.5">Pakaian</td>
                <td className="py-0.5 font-bold">: {settings.pakaianTemuduga || 'Uniform sekolah'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-2 text-justify indent-8">
          2.<span className="ml-4 inline-block">Semoga kehadiran saudara/saudari dapat melancarkan temuduga yang diadakan dengan jayanya.</span>
        </p>

        <p className="mb-4">Sekian, terima kasih.</p>
      </div>

      <div className="mt-4">
        <p className="font-bold font-italic mb-2">"MALAYSIA MADANI"</p>
        <p className="font-bold font-italic mb-2">"BERKHIDMAT UNTUK NEGARA"</p>
        <p className="mb-6">Saya yang menjalankan amanah,</p>
        
        <div>
          <p>.......................................................</p>
          <p className="font-bold uppercase">({settings.namaPengetua || 'NAMA PENTADBIR'})</p>
          <p>Pengetua</p>
          <p>SMA Kota Gelanggi 3</p>
        </div>

        <div className="mt-4 text-xs">
          <p>s.k: Fail HEM</p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          .printable-area { transform: scale(0.95); transform-origin: top center; }
        }
      `}} />
    </div>
  );
}
