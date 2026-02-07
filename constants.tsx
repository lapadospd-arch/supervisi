
import { ObservationFocus, Teacher } from './types';

export interface PerformanceTarget {
  id: string;
  label: string;
  dianjurkan: string[];
  dihindari: string[];
}

export interface PerformanceRubric {
  id: string;
  label: string;
  description: string;
  targets: PerformanceTarget[];
}

export const PERFORMANCE_RUBRICS: PerformanceRubric[] = [
  {
    id: 'instruksi',
    label: 'Instruksi Pembelajaran',
    description: 'Penjelasan terstruktur yang memandu murid memahami, mengaplikasi dan merefleksikan pembelajaran sebagai implementasi pembelajaran mendalam.',
    targets: [
      {
        id: 'ins_1',
        label: 'Guru mengajukan pertanyaan yang menstimulasi proses diskusi dan berpikir kritis',
        dianjurkan: [
          'Guru mengajukan pertanyaan terbuka untuk memancing proses diskusi dan berpikir kritis',
          'Guru mengajukan pertanyaan yang mengaitkan konsep yang dipelajari dengan konsep sebelumnya',
          'Guru mengajukan yang meminta peserta didik membandingkan dua konsep yang berbeda'
        ],
        dihindari: [
          'Guru mengajukan pertanyaan hanya untuk menguji pemahaman peserta didik',
          'Guru mengajukan pertanyaan yang meminta peserta didik mengulang konsep yang disampaikan',
          'Guru menghakimi jawaban peserta didik sehingga membuat peserta didik yang lain ragu buat menjawab'
        ]
      },
      {
        id: 'ins_2',
        label: 'Guru memfasilitasi kegiatan pembelajaran yang memberi peran pada semua peserta didik',
        dianjurkan: [
          'Guru memotivasi semua peserta didik untuk berperan aktif dalam proses pembelajaran',
          'Guru menyediakan peran dalam kelompok untuk memastikan semua anggota mendapat peran',
          'Guru memberi dukungan dan kesempatan pada peserta didik yang pasif untuk berperan'
        ],
        dihindari: [
          'Guru membiarkan peserta didik membuat dan membagikan peran dalam kelompok',
          'Guru menyediakan peran yang terbatas sehingga peserta didik tertentu tidak mendapat peran',
          'Guru membiarkan sebagian peserta didik bersikap dominan dalam proses pembelajaran'
        ]
      },
      {
        id: 'ins_3',
        label: 'Guru memfasilitasi terjadinya diskusi kelompok yang interaktif, kritis dan inklusif',
        dianjurkan: [
          'Guru memotivasi peserta didik untuk menyampaikan pendapat secara terbuka',
          'Guru membentuk kelompok dengan beragam kemampuan dan minat',
          'Guru berkeliling kelas untuk memberikan bimbingan pada kelompok dalam berdiskusi'
        ],
        dihindari: [
          'Guru hanya duduk di depan dan membiarkan kelompok berdiskusi sendiri',
          'Guru membiarkan peserta didik membentuk kelompok sendiri sesuka hatinya',
          'Guru mengabaikan atau melarang perbedaan pendapat'
        ]
      }
    ]
  },
  {
    id: 'disiplin',
    label: 'Penerapan Disiplin Positif',
    description: 'Penerapan prinsip disiplin positif untuk mengelola perilaku dan kebiasaan kelas yang disepakati bersama agar kualitas lingkungan pembelajaran semakin meningkat.',
    targets: [
      {
        id: 'dis_1',
        label: 'Guru melakukan refleksi dinamika kelas untuk menerapkan kesepakatan kelas',
        dianjurkan: [
          'Guru mengajak peserta didik melakukan refleksi dinamika kelas secara terbuka',
          'Guru menunjukkan kesediaan mendengarkan pandangan peserta didik tentang dinamika kelas',
          'Guru bersikap adaptif dalam menyesuaikan pendekatan dalam menjalankan kedisiplinan'
        ],
        dihindari: [
          'Guru mengabaikan pendapat peserta didik tentang apa yang terjadi di kelas',
          'Guru bersikap defensive dalam menyikapi umpan balik dari peserta didik terkait kedisiplinan',
          'Guru menerapkan hukuman fisik terhadap peserta didik yang melakukan pelanggaran kedisiplinan'
        ]
      },
      {
        id: 'dis_2',
        label: 'Guru melakukan penguatan positif terhadap perilaku yang sesuai atau mendukung kesepakatan kelas',
        dianjurkan: [
          'Guru segera beri pengakuan terhadap perilaku peserta didik yang sesuai kesepakatan kelas',
          'Guru beri penguatan positif dengan berbagai cara yang beragam',
          'Guru mengakui suatu perilaku positif secara spesifik dan menjelaskan alasannya'
        ],
        dihindari: [
          'Guru tidak konsisten dalam memberikan penguatan positif, hanya pada peserta didik tertentu',
          'Guru mengabaikan perilaku positif karena terlalu fokus pada perilaku negatif atau hal lain',
          'Guru melakukan penguatan perilaku yang tidak bermanfaat bagi peserta didik dan kelas secara keseluruhan'
        ]
      },
      {
        id: 'dis_3',
        label: 'Guru melakukan restitusi untuk membantu peserta didik menyadari konsekuensi dan memperbaiki perilaku melanggarnya',
        dianjurkan: [
          'Guru dengan sabar membantu peserta didik menyadari konsekuensi dari perilaku melanggarnya',
          'Guru mendengarkan sudut pandang peserta didik terhadap perilaku melanggarnya',
          'Guru memberikan dukungan pada peserta didik dalam melakukan perbaikan perilakunya'
        ],
        dihindari: [
          'Guru langsung memberikan hukuman, bukan membangun upaya perbaikan perilaku',
          'Guru kehilangan kesabaran dalam membantu peserta didik menyadari konsekuensi perilakunya',
          'Guru meminta peserta didik untuk tenang tanpa melakukan restitusi terhadap perilaku melanggar'
        ]
      }
    ]
  }
];

// Menurunkan OBSERVATION_INDICATORS dari target rubrik untuk konsistensi data di laporan
export const OBSERVATION_INDICATORS = PERFORMANCE_RUBRICS.flatMap(rubric => 
  rubric.targets.map(target => ({
    id: target.id,
    label: target.label
  }))
);

export const TEACHERS: Teacher[] = [
  { id: '1', name: 'Mariati,S.Ag', nip: '197503122005012008', subject: 'Pendidikan Agama Islam', phase: 'Fase D' },
  { id: '2', name: 'Selviyani,S.PDH', nip: '198205152010012015', subject: 'Pendidikan Agama Hindu', phase: 'Fase D' },
  { id: '3', name: 'Nur Izzah,S.Pd', nip: '198808202015032002', subject: 'PKn', phase: 'Fase D' },
  { id: '4', name: 'N.Rahmat,S.Pd', nip: '197001011995121001', subject: 'Bahasa Indonesia', phase: 'Fase D' },
  { id: '5', name: 'Nurbaya,S.Pd', nip: '197204051998032004', subject: 'Matematika', phase: 'Fase D' },
  { id: '6', name: 'Jannatul Makwah Abuhair,S.Pd', nip: '199011122019032011', subject: 'IPA', phase: 'Fase D' },
  { id: '7', name: 'Hasan Pasanjeran,S.Pd', nip: '197806142006041009', subject: 'IPS', phase: 'Fase D' },
  { id: '8', name: 'Rini Verawati,S.Pd', nip: '198502282009022003', subject: 'Bahasa Inggris', phase: 'Fase D' },
  { id: '9', name: 'Lapado,S.Pd', nip: '196809101992031005', subject: 'Bahasa Inggris', phase: 'Fase E' },
  { id: '10', name: 'Sudrajat R,S.Pd', nip: '198001012005011002', subject: 'PJOK', phase: 'Fase D' },
  { id: '11', name: 'Kevin,S.Pd', nip: '199505052022031001', subject: 'Informatika', phase: 'Fase D' },
  { id: '12', name: 'Darmawati,S.Pd', nip: '197607072007012006', subject: 'Ekonomi', phase: 'Fase D' },
  { id: '13', name: 'RINI,S.Pd', nip: '198812122015032005', subject: 'Bahasa Indonesia', phase: 'Fase D' },
  { id: '14', name: 'Jamiluddin,SE', nip: '197403032006041007', subject: 'IPS', phase: 'Fase D' },
  { id: '15', name: 'Kartini Apriani,S.Pd', nip: '199204042019032008', subject: 'Matematika', phase: 'Fase D' },
];

export const FOCUS_OPTIONS: ObservationFocus[] = [
  { id: '1', title: 'Instruksi Pembelajaran', description: 'Fokus pada penjelasan terstruktur dan implementasi pembelajaran mendalam.' },
  { id: '2', title: 'Penerapan Disiplin Positif', description: 'Fokus pada pengelolaan perilaku melalui prinsip disiplin positif.' },
  { id: '3', title: 'Refleksi Pembelajaran', description: 'Fokus pada kemampuan murid mengevaluasi hasil belajarnya.' },
];
