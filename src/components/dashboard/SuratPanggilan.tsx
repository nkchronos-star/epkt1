import { Candidate } from '../../types';
import { useAppContext } from '../../store';

export default function SuratPanggilan({ candidate }: { candidate: Candidate }) {
  const { settings } = useAppContext();
  const tarikhSemasa = new Date().toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <div className="bg-white p-6 print:p-0 print:py-2 max-w-4xl mx-auto shadow-2xl printable-area text-black font-sans text-xs">
      {/* Header Surat */}
      <div className="flex items-start mb-3 print:mb-1 border-b-2 border-black pb-2">
        <div className="flex items-center gap-4 w-full">
          <img src="https://i.postimg.cc/mrcDcHn3/logo-sma-cantik.png" alt="Jata Negara" className="w-20 h-auto object-contain " />
          <div className="flex-1 flex justify-between items-start">
            <div>
              <h1 className="font-bold text-base mb-0.5">SMA KOTA GELANGGI 3</h1>
              <p className="leading-tight uppercase text-[11px]">
                KOTA GELANGGI 3<br/>
                27000 JERANTUT<br/>
                PAHANG DARUL MAKMUR
              </p>
            </div>
            <div className="text-[11px] leading-tight mt-4 print:mt-3">
              <p>Tel: 09-2051555</p>
              <p>E-MEL: cft2001@moe.edu.my</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end mb-2 print:mb-1">
        <table className="text-[11px]">
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

      <div className="mb-3 print:mb-1 uppercase text-[11px]">
        <p>{candidate.name}</p>
        <p>{candidate.ic},</p>
        <p>{candidate.alamat1},</p>
        {candidate.alamat2 && <p>{candidate.alamat2},</p>}
        <p>{candidate.poskod} {candidate.daerah},</p>
        <p>{candidate.negeri}.</p>
      </div>

      <div className="mb-2 print:mb-1 text-[11px]">
        <p>Saudara / Saudari,</p>
      </div>

      <div className="mb-3 print:mb-1">
        <h2 className="font-bold uppercase underline text-xs">
          PANGGILAN TEMUDUGA PENGAMBILAN PELAJAR TINGKATAN 1 SESI {settings.sesiKemasukan || '2026 / 2027'}
        </h2>
      </div>

      <div className="mb-2 print:mb-1 text-justify text-[11px] leading-relaxed">
        <p className="mb-3 print:mb-1">Perkara di atas adalah dirujuk.</p>
        
        <div className="mb-3 print:mb-1 text-justify flex">
          <span className="w-8 shrink-0">2.</span>
          <span>Sukacitanya dimaklumkan bahawa saudara/saudari telah <strong>TERPILIH</strong> sebagai calon untuk menghadiri sesi temuduga hafazan bagi Pengambilan Pelajar Tingkatan 1 di SMA Kota Gelanggi 3 tahun {settings.sesiKemasukan?.substring(0, 4) || '2026'}. Sesi temuduga akan dilaksanakan pada ketetapan berikut:</span>
        </div>

        <div className="ml-10 mb-3 print:mb-1">
          <table className="w-full text-xs">
            <tbody>
              <tr>
                <td className="py-0.5 print:py-0 w-24">Tarikh</td>
                <td className="py-0.5 print:py-0 font-bold">: {settings.tarikhTemuduga || '8 November 2025'}</td>
              </tr>
              <tr>
                <td className="py-0.5 print:py-0">Hari</td>
                <td className="py-0.5 print:py-0 font-bold">: {settings.hariTemuduga || 'Sabtu'}</td>
              </tr>
              <tr>
                <td className="py-0.5 print:py-0">Masa</td>
                <td className="py-0.5 print:py-0 font-bold">: {settings.masaTemuduga || '8.00 pagi'}</td>
              </tr>
              <tr>
                <td className="py-0.5 print:py-0">Tempat</td>
                <td className="py-0.5 print:py-0 font-bold">: {settings.tempatTemuduga || 'Laman Selera, SMA Kota Gelanggi 3'}</td>
              </tr>
              <tr>
                <td className="py-0.5 print:py-0">Pakaian</td>
                <td className="py-0.5 print:py-0 font-bold">: {settings.pakaianTemuduga || 'Uniform sekolah'}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-3 print:mb-1 text-justify flex">
          <span className="w-8 shrink-0">3.</span>
          <span>Sekiranya saudara/saudari tidak menghadiri sesi temuduga pada tarikh dan masa yang telah ditetapkan, secara automatik permohonan adalah terbatal.</span>
        </div>

        <div className="mb-4 print:mb-1 text-justify flex">
          <span className="w-8 shrink-0">4.</span>
          <span>Segala kerjasama yang diberikan amat kami hargai dan didahului dengan ucapan terima kasih.</span>
        </div>

        <p className="mb-3 print:mb-1">Sekian, terima kasih.</p>
      </div>

      <div className="mt-3 print:mt-2">
        <p className="font-bold font-italic mb-2 print:mb-1">"MALAYSIA MADANI"</p>
        <p className="font-bold font-italic mb-2 print:mb-1">"BERKHIDMAT UNTUK NEGARA"</p>
        <p className="mb-4 print:mb-1">Saya yang menjalankan amanah,</p>
        
        <div>
          <p>.......................................................</p>
          <p className="font-bold uppercase">({settings.namaPengetua || 'NAMA PENTADBIR'})</p>
          <p>Pengetua</p>
          <p>SMA Kota Gelanggi 3</p>
        </div>

        <div className="mt-3 print:mt-2 text-[11px]">
          <p>s.k: Fail HEM</p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          .printable-area { transform: scale(0.85); transform-origin: top center; }
        }
      `}} />
    </div>
  );
}
