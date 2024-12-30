import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page1',
    loadChildren: () => import('./page1/page1.module').then( m => m.Page1PageModule)
  },
  {
    path: 'page2',
    loadChildren: () => import('./page2/page2.module').then( m => m.Page2PageModule)
  },
  {
    path: 'page3',
    loadChildren: () => import('./page3/page3.module').then( m => m.Page3PageModule)
  },
  {
    path: 'page4',
    loadChildren: () => import('./page4/page4.module').then( m => m.Page4PageModule)
  },
  {
    path: 'page5',
    loadChildren: () => import('./page5/page5.module').then( m => m.Page5PageModule)
  },
  {
    path: 'page6',
    loadChildren: () => import('./page6/page6.module').then( m => m.Page6PageModule)
  },
  {
    path: 'page7',
    loadChildren: () => import('./page7/page7.module').then( m => m.Page7PageModule)
  },
  {
    path: 'page8',
    loadChildren: () => import('./page8/page8.module').then( m => m.Page8PageModule)
  },
  {
    path: 'page9',
    loadChildren: () => import('./page9/page9.module').then( m => m.Page9PageModule)
  },
  {
    path: 'page10',
    loadChildren: () => import('./page10/page10.module').then( m => m.Page10PageModule)
  },
  {
    path: 'page11',
    loadChildren: () => import('./page11/page11.module').then( m => m.Page11PageModule)
  },
  {
    path: 'page12',
    loadChildren: () => import('./page12/page12.module').then( m => m.Page12PageModule)
  },
  {
    path: 'page13',
    loadChildren: () => import('./page13/page13.module').then( m => m.Page13PageModule)
  },
  {
    path: 'page14',
    loadChildren: () => import('./page14/page14.module').then( m => m.Page14PageModule)
  },
  {
    path: 'page15',
    loadChildren: () => import('./page15/page15.module').then( m => m.Page15PageModule)
  },
  {
    path: 'page16',
    loadChildren: () => import('./page16/page16.module').then( m => m.Page16PageModule)
  },
  {
    path: 'page17',
    loadChildren: () => import('./page17/page17.module').then( m => m.Page17PageModule)
  },
  {
    path: 'page18',
    loadChildren: () => import('./page18/page18.module').then( m => m.Page18PageModule)
  },
  {
    path: 'page19',
    loadChildren: () => import('./page19/page19.module').then( m => m.Page19PageModule)
  },
  {
    path: 'page20',
    loadChildren: () => import('./page20/page20.module').then( m => m.Page20PageModule)
  },
  {
    path: 'page21',
    loadChildren: () => import('./page21/page21.module').then( m => m.Page21PageModule)
  },
  {
    path: 'page22',
    loadChildren: () => import('./page22/page22.module').then( m => m.Page22PageModule)
  },
  {
    path: 'page23',
    loadChildren: () => import('./page23/page23.module').then( m => m.Page23PageModule)
  },
  {
    path: 'page24',
    loadChildren: () => import('./page24/page24.module').then( m => m.Page24PageModule)
  },
  {
    path: 'page25',
    loadChildren: () => import('./page25/page25.module').then( m => m.Page25PageModule)
  },
  {
    path: 'page26',
    loadChildren: () => import('./page26/page26.module').then( m => m.Page26PageModule)
  },
  {
    path: 'page27',
    loadChildren: () => import('./page27/page27.module').then( m => m.Page27PageModule)
  },
  {
    path: 'page28',
    loadChildren: () => import('./page28/page28.module').then( m => m.Page28PageModule)
  },
  {
    path: 'page29',
    loadChildren: () => import('./page29/page29.module').then( m => m.Page29PageModule)
  },
  {
    path: 'page30',
    loadChildren: () => import('./page30/page30.module').then( m => m.Page30PageModule)
  },
  {
    path: 'page31',
    loadChildren: () => import('./page31/page31.module').then( m => m.Page31PageModule)
  },
  {
    path: 'page32',
    loadChildren: () => import('./page32/page32.module').then( m => m.Page32PageModule)
  },
  {
    path: 'page33',
    loadChildren: () => import('./page33/page33.module').then( m => m.Page33PageModule)
  },
  {
    path: 'page34',
    loadChildren: () => import('./page34/page34.module').then( m => m.Page34PageModule)
  },
  {
    path: 'page35',
    loadChildren: () => import('./page35/page35.module').then( m => m.Page35PageModule)
  },
  {
    path: 'page36',
    loadChildren: () => import('./page36/page36.module').then( m => m.Page36PageModule)
  },
  {
    path: 'page37',
    loadChildren: () => import('./page37/page37.module').then( m => m.Page37PageModule)
  },
  {
    path: 'page38',
    loadChildren: () => import('./page38/page38.module').then( m => m.Page38PageModule)
  },
  {
    path: 'page39',
    loadChildren: () => import('./page39/page39.module').then( m => m.Page39PageModule)
  },
  {
    path: 'page40',
    loadChildren: () => import('./page40/page40.module').then( m => m.Page40PageModule)
  },
  {
    path: 'page41',
    loadChildren: () => import('./page41/page41.module').then( m => m.Page41PageModule)
  },
  {
    path: 'page42',
    loadChildren: () => import('./page42/page42.module').then( m => m.Page42PageModule)
  },
  {
    path: 'page43',
    loadChildren: () => import('./page43/page43.module').then( m => m.Page43PageModule)
  },
  {
    path: 'page44',
    loadChildren: () => import('./page44/page44.module').then( m => m.Page44PageModule)
  },
  {
    path: 'page45',
    loadChildren: () => import('./page45/page45.module').then( m => m.Page45PageModule)
  },
  {
    path: 'page46',
    loadChildren: () => import('./page46/page46.module').then( m => m.Page46PageModule)
  },
  {
    path: 'page47',
    loadChildren: () => import('./page47/page47.module').then( m => m.Page47PageModule)
  },
  {
    path: 'page48',
    loadChildren: () => import('./page48/page48.module').then( m => m.Page48PageModule)
  },
  {
    path: 'page49',
    loadChildren: () => import('./page49/page49.module').then( m => m.Page49PageModule)
  },
  {
    path: 'page50',
    loadChildren: () => import('./page50/page50.module').then( m => m.Page50PageModule)
  },
  {
    path: 'page51',
    loadChildren: () => import('./page51/page51.module').then( m => m.Page51PageModule)
  },
  {
    path: 'page51',
    loadChildren: () => import('./page51/page51.module').then( m => m.Page51PageModule)
  },
  {
    path: 'page52',
    loadChildren: () => import('./page52/page52.module').then( m => m.Page52PageModule)
  },
  {
    path: 'page53',
    loadChildren: () => import('./page53/page53.module').then( m => m.Page53PageModule)
  },
  {
    path: 'page54',
    loadChildren: () => import('./page54/page54.module').then( m => m.Page54PageModule)
  },
  {
    path: 'page55',
    loadChildren: () => import('./page55/page55.module').then( m => m.Page55PageModule)
  },
  {
    path: 'page56',
    loadChildren: () => import('./page56/page56.module').then( m => m.Page56PageModule)
  },
  {
    path: 'page57',
    loadChildren: () => import('./page57/page57.module').then( m => m.Page57PageModule)
  },
  {
    path: 'marikina',
    loadChildren: () => import('./marikina/marikina.module').then( m => m.MarikinaPageModule)
  },
  {
    path: 'marikina1',
    loadChildren: () => import('./marikina1/marikina1.module').then( m => m.Marikina1PageModule)
  },
  {
    path: 'marikina2',
    loadChildren: () => import('./marikina2/marikina2.module').then( m => m.Marikina2PageModule)
  },
  {
    path: 'marikina3',
    loadChildren: () => import('./marikina3/marikina3.module').then( m => m.Marikina3PageModule)
  },
  {
    path: 'marikina4',
    loadChildren: () => import('./marikina4/marikina4.module').then( m => m.Marikina4PageModule)
  },
  {
    path: 'marikina5',
    loadChildren: () => import('./marikina5/marikina5.module').then( m => m.Marikina5PageModule)
  },
  {
    path: 'marikina6',
    loadChildren: () => import('./marikina6/marikina6.module').then( m => m.Marikina6PageModule)
  },
  {
    path: 'marikina7',
    loadChildren: () => import('./marikina7/marikina7.module').then( m => m.Marikina7PageModule)
  },
  {
    path: 'marikina8',
    loadChildren: () => import('./marikina8/marikina8.module').then( m => m.Marikina8PageModule)
  },
  {
    path: 'marikina9',
    loadChildren: () => import('./marikina9/marikina9.module').then( m => m.Marikina9PageModule)
  },
  {
    path: 'marikina10',
    loadChildren: () => import('./marikina10/marikina10.module').then( m => m.Marikina10PageModule)
  },
  {
    path: 'muntinlupa',
    loadChildren: () => import('./muntinlupa/muntinlupa.module').then( m => m.MuntinlupaPageModule)
  },
  {
    path: 'muntinlupa1',
    loadChildren: () => import('./muntinlupa1/muntinlupa1.module').then( m => m.Muntinlupa1PageModule)
  },
  {
    path: 'muntinlupa2',
    loadChildren: () => import('./muntinlupa2/muntinlupa2.module').then( m => m.Muntinlupa2PageModule)
  },
  {
    path: 'muntinlupa3',
    loadChildren: () => import('./muntinlupa3/muntinlupa3.module').then( m => m.Muntinlupa3PageModule)
  },
  {
    path: 'muntinlupa4',
    loadChildren: () => import('./muntinlupa4/muntinlupa4.module').then( m => m.Muntinlupa4PageModule)
  },
  {
    path: 'muntinlupa5',
    loadChildren: () => import('./muntinlupa5/muntinlupa5.module').then( m => m.Muntinlupa5PageModule)
  },
  {
    path: 'muntinlupa6',
    loadChildren: () => import('./muntinlupa6/muntinlupa6.module').then( m => m.Muntinlupa6PageModule)
  },
  {
    path: 'muntinlupa7',
    loadChildren: () => import('./muntinlupa7/muntinlupa7.module').then( m => m.Muntinlupa7PageModule)
  },
  {
    path: 'muntinlupa8',
    loadChildren: () => import('./muntinlupa8/muntinlupa8.module').then( m => m.Muntinlupa8PageModule)
  },
  {
    path: 'muntinlupa9',
    loadChildren: () => import('./muntinlupa9/muntinlupa9.module').then( m => m.Muntinlupa9PageModule)
  },
  {
    path: 'muntinlupa10',
    loadChildren: () => import('./muntinlupa10/muntinlupa10.module').then( m => m.Muntinlupa10PageModule)
  },
  {
    path: 'paranaque',
    loadChildren: () => import('./paranaque/paranaque.module').then( m => m.ParanaquePageModule)
  },
  {
    path: 'paranaque1',
    loadChildren: () => import('./paranaque1/paranaque1.module').then( m => m.Paranaque1PageModule)
  },
  {
    path: 'paranaque2',
    loadChildren: () => import('./paranaque2/paranaque2.module').then( m => m.Paranaque2PageModule)
  },
  {
    path: 'paranaque3',
    loadChildren: () => import('./paranaque3/paranaque3.module').then( m => m.Paranaque3PageModule)
  },
  {
    path: 'paranaque4',
    loadChildren: () => import('./paranaque4/paranaque4.module').then( m => m.Paranaque4PageModule)
  },
  {
    path: 'paranaque5',
    loadChildren: () => import('./paranaque5/paranaque5.module').then( m => m.Paranaque5PageModule)
  },
  {
    path: 'paranaque6',
    loadChildren: () => import('./paranaque6/paranaque6.module').then( m => m.Paranaque6PageModule)
  },
  {
    path: 'paranaque7',
    loadChildren: () => import('./paranaque7/paranaque7.module').then( m => m.Paranaque7PageModule)
  },
  {
    path: 'paranaque8',
    loadChildren: () => import('./paranaque8/paranaque8.module').then( m => m.Paranaque8PageModule)
  },
  {
    path: 'paranaque9',
    loadChildren: () => import('./paranaque9/paranaque9.module').then( m => m.Paranaque9PageModule)
  },
  {
    path: 'paranaque10',
    loadChildren: () => import('./paranaque10/paranaque10.module').then( m => m.Paranaque10PageModule)
  },
  {
    path: 'pasay',
    loadChildren: () => import('./pasay/pasay.module').then( m => m.PasayPageModule)
  },
  {
    path: 'pasay1',
    loadChildren: () => import('./pasay1/pasay1.module').then( m => m.Pasay1PageModule)
  },
  {
    path: 'pasay2',
    loadChildren: () => import('./pasay2/pasay2.module').then( m => m.Pasay2PageModule)
  },
  {
    path: 'pasay3',
    loadChildren: () => import('./pasay3/pasay3.module').then( m => m.Pasay3PageModule)
  },
  {
    path: 'pasay4',
    loadChildren: () => import('./pasay4/pasay4.module').then( m => m.Pasay4PageModule)
  },
  {
    path: 'pasay5',
    loadChildren: () => import('./pasay5/pasay5.module').then( m => m.Pasay5PageModule)
  },
  {
    path: 'pasay6',
    loadChildren: () => import('./pasay6/pasay6.module').then( m => m.Pasay6PageModule)
  },
  {
    path: 'pasay7',
    loadChildren: () => import('./pasay7/pasay7.module').then( m => m.Pasay7PageModule)
  },
  {
    path: 'pasay8',
    loadChildren: () => import('./pasay8/pasay8.module').then( m => m.Pasay8PageModule)
  },
  {
    path: 'pasay9',
    loadChildren: () => import('./pasay9/pasay9.module').then( m => m.Pasay9PageModule)
  },
  {
    path: 'pasay10',
    loadChildren: () => import('./pasay10/pasay10.module').then( m => m.Pasay10PageModule)
  },
  {
    path: 'pasig',
    loadChildren: () => import('./pasig/pasig.module').then( m => m.PasigPageModule)
  },
  {
    path: 'pasig1',
    loadChildren: () => import('./pasig1/pasig1.module').then( m => m.Pasig1PageModule)
  },
  {
    path: 'pasig2',
    loadChildren: () => import('./pasig2/pasig2.module').then( m => m.Pasig2PageModule)
  },
  {
    path: 'pasig3',
    loadChildren: () => import('./pasig3/pasig3.module').then( m => m.Pasig3PageModule)
  },
  {
    path: 'pasig4',
    loadChildren: () => import('./pasig4/pasig4.module').then( m => m.Pasig4PageModule)
  },
  {
    path: 'pasig5',
    loadChildren: () => import('./pasig5/pasig5.module').then( m => m.Pasig5PageModule)
  },
  {
    path: 'pasig6',
    loadChildren: () => import('./pasig6/pasig6.module').then( m => m.Pasig6PageModule)
  },
  {
    path: 'pasig7',
    loadChildren: () => import('./pasig7/pasig7.module').then( m => m.Pasig7PageModule)
  },
  {
    path: 'pasig8',
    loadChildren: () => import('./pasig8/pasig8.module').then( m => m.Pasig8PageModule)
  },
  {
    path: 'pasig9',
    loadChildren: () => import('./pasig9/pasig9.module').then( m => m.Pasig9PageModule)
  },
  {
    path: 'pasig10',
    loadChildren: () => import('./pasig10/pasig10.module').then( m => m.Pasig10PageModule)
  },
  {
    path: 'region1',
    loadChildren: () => import('./region1/region1.module').then( m => m.Region1PageModule)
  },
  {
    path: 'region2',
    loadChildren: () => import('./region2/region2.module').then( m => m.Region2PageModule)
  },
  {
    path: 'region3',
    loadChildren: () => import('./region3/region3.module').then( m => m.Region3PageModule)
  },
  {
    path: 'region4',
    loadChildren: () => import('./region4/region4.module').then( m => m.Region4PageModule)
  },
  {
    path: 'region4a',
    loadChildren: () => import('./region4a/region4a.module').then( m => m.Region4aPageModule)
  },
  {
    path: 'region4b',
    loadChildren: () => import('./region4b/region4b.module').then( m => m.Region4bPageModule)
  },
  {
    path: 'region5',
    loadChildren: () => import('./region5/region5.module').then( m => m.Region5PageModule)
  },
  {
    path: 'ilocos-n',
    loadChildren: () => import('./ilocos-n/ilocos-n.module').then( m => m.IlocosNPageModule)
  },
  {
    path: 'ilocos-n1',
    loadChildren: () => import('./ilocos-n1/ilocos-n1.module').then( m => m.IlocosN1PageModule)
  },
  {
    path: 'ilocos-n2',
    loadChildren: () => import('./ilocos-n2/ilocos-n2.module').then( m => m.IlocosN2PageModule)
  },
  {
    path: 'ilocos-n3',
    loadChildren: () => import('./ilocos-n3/ilocos-n3.module').then( m => m.IlocosN3PageModule)
  },
  {
    path: 'ilocos-n4',
    loadChildren: () => import('./ilocos-n4/ilocos-n4.module').then( m => m.IlocosN4PageModule)
  },
  {
    path: 'ilocos-n5',
    loadChildren: () => import('./ilocos-n5/ilocos-n5.module').then( m => m.IlocosN5PageModule)
  },
  {
    path: 'ilocos-n6',
    loadChildren: () => import('./ilocos-n6/ilocos-n6.module').then( m => m.IlocosN6PageModule)
  },
  {
    path: 'ilocos-n7',
    loadChildren: () => import('./ilocos-n7/ilocos-n7.module').then( m => m.IlocosN7PageModule)
  },
  {
    path: 'ilocos-n8',
    loadChildren: () => import('./ilocos-n8/ilocos-n8.module').then( m => m.IlocosN8PageModule)
  },
  {
    path: 'ilocos-n9',
    loadChildren: () => import('./ilocos-n9/ilocos-n9.module').then( m => m.IlocosN9PageModule)
  },
  {
    path: 'ilocos-n10',
    loadChildren: () => import('./ilocos-n10/ilocos-n10.module').then( m => m.IlocosN10PageModule)
  },
  {
    path: 'ilocos-s',
    loadChildren: () => import('./ilocos-s/ilocos-s.module').then( m => m.IlocosSPageModule)
  },
  {
    path: 'ilocos-s1',
    loadChildren: () => import('./ilocos-s1/ilocos-s1.module').then( m => m.IlocosS1PageModule)
  },
  {
    path: 'ilocos-s2',
    loadChildren: () => import('./ilocos-s2/ilocos-s2.module').then( m => m.IlocosS2PageModule)
  },
  {
    path: 'ilocos-s3',
    loadChildren: () => import('./ilocos-s3/ilocos-s3.module').then( m => m.IlocosS3PageModule)
  },
  {
    path: 'ilocos-s4',
    loadChildren: () => import('./ilocos-s4/ilocos-s4.module').then( m => m.IlocosS4PageModule)
  },
  {
    path: 'ilocos-s5',
    loadChildren: () => import('./ilocos-s5/ilocos-s5.module').then( m => m.IlocosS5PageModule)
  },
  {
    path: 'ilocos-s6',
    loadChildren: () => import('./ilocos-s6/ilocos-s6.module').then( m => m.IlocosS6PageModule)
  },
  {
    path: 'ilocos-s7',
    loadChildren: () => import('./ilocos-s7/ilocos-s7.module').then( m => m.IlocosS7PageModule)
  },
  {
    path: 'ilocos-s8',
    loadChildren: () => import('./ilocos-s8/ilocos-s8.module').then( m => m.IlocosS8PageModule)
  },
  {
    path: 'ilocos-s9',
    loadChildren: () => import('./ilocos-s9/ilocos-s9.module').then( m => m.IlocosS9PageModule)
  },
  {
    path: 'ilocos-s10',
    loadChildren: () => import('./ilocos-s10/ilocos-s10.module').then( m => m.IlocosS10PageModule)
  },
  {
    path: 'la-u',
    loadChildren: () => import('./la-u/la-u.module').then( m => m.LaUPageModule)
  },
  {
    path: 'la-u1',
    loadChildren: () => import('./la-u1/la-u1.module').then( m => m.LaU1PageModule)
  },
  {
    path: 'la-u2',
    loadChildren: () => import('./la-u2/la-u2.module').then( m => m.LaU2PageModule)
  },
  {
    path: 'la-u3',
    loadChildren: () => import('./la-u3/la-u3.module').then( m => m.LaU3PageModule)
  },
  {
    path: 'la-u4',
    loadChildren: () => import('./la-u4/la-u4.module').then( m => m.LaU4PageModule)
  },
  {
    path: 'la-u5',
    loadChildren: () => import('./la-u5/la-u5.module').then( m => m.LaU5PageModule)
  },
  {
    path: 'la-u6',
    loadChildren: () => import('./la-u6/la-u6.module').then( m => m.LaU6PageModule)
  },
  {
    path: 'la-u7',
    loadChildren: () => import('./la-u7/la-u7.module').then( m => m.LaU7PageModule)
  },
  {
    path: 'la-u8',
    loadChildren: () => import('./la-u8/la-u8.module').then( m => m.LaU8PageModule)
  },
  {
    path: 'la-u9',
    loadChildren: () => import('./la-u9/la-u9.module').then( m => m.LaU9PageModule)
  },
  {
    path: 'la-u10',
    loadChildren: () => import('./la-u10/la-u10.module').then( m => m.LaU10PageModule)
  },
  {
    path: 'pangasinan',
    loadChildren: () => import('./pangasinan/pangasinan.module').then( m => m.PangasinanPageModule)
  },
  {
    path: 'pangasinan1',
    loadChildren: () => import('./pangasinan1/pangasinan1.module').then( m => m.Pangasinan1PageModule)
  },
  {
    path: 'pangasinan2',
    loadChildren: () => import('./pangasinan2/pangasinan2.module').then( m => m.Pangasinan2PageModule)
  },
  {
    path: 'pangasinan3',
    loadChildren: () => import('./pangasinan3/pangasinan3.module').then( m => m.Pangasinan3PageModule)
  },
  {
    path: 'pangasinan4',
    loadChildren: () => import('./pangasinan4/pangasinan4.module').then( m => m.Pangasinan4PageModule)
  },
  {
    path: 'pangasinan5',
    loadChildren: () => import('./pangasinan5/pangasinan5.module').then( m => m.Pangasinan5PageModule)
  },
  {
    path: 'pangasinan6',
    loadChildren: () => import('./pangasinan6/pangasinan6.module').then( m => m.Pangasinan6PageModule)
  },
  {
    path: 'pangasinan7',
    loadChildren: () => import('./pangasinan7/pangasinan7.module').then( m => m.Pangasinan7PageModule)
  },
  {
    path: 'pangasinan8',
    loadChildren: () => import('./pangasinan8/pangasinan8.module').then( m => m.Pangasinan8PageModule)
  },
  {
    path: 'pangasinan9',
    loadChildren: () => import('./pangasinan9/pangasinan9.module').then( m => m.Pangasinan9PageModule)
  },
  {
    path: 'pangasinan10',
    loadChildren: () => import('./pangasinan10/pangasinan10.module').then( m => m.Pangasinan10PageModule)
  },
  {
    path: 'cagayan',
    loadChildren: () => import('./cagayan/cagayan.module').then( m => m.CagayanPageModule)
  },
  {
    path: 'cagayan1',
    loadChildren: () => import('./cagayan1/cagayan1.module').then( m => m.Cagayan1PageModule)
  },
  {
    path: 'cagayan2',
    loadChildren: () => import('./cagayan2/cagayan2.module').then( m => m.Cagayan2PageModule)
  },
  {
    path: 'cagayan3',
    loadChildren: () => import('./cagayan3/cagayan3.module').then( m => m.Cagayan3PageModule)
  },
  {
    path: 'cagayan4',
    loadChildren: () => import('./cagayan4/cagayan4.module').then( m => m.Cagayan4PageModule)
  },
  {
    path: 'cagayan5',
    loadChildren: () => import('./cagayan5/cagayan5.module').then( m => m.Cagayan5PageModule)
  },
  {
    path: 'cagayan6',
    loadChildren: () => import('./cagayan6/cagayan6.module').then( m => m.Cagayan6PageModule)
  },
  {
    path: 'cagayan7',
    loadChildren: () => import('./cagayan7/cagayan7.module').then( m => m.Cagayan7PageModule)
  },
  {
    path: 'cagayan8',
    loadChildren: () => import('./cagayan8/cagayan8.module').then( m => m.Cagayan8PageModule)
  },
  {
    path: 'cagayan9',
    loadChildren: () => import('./cagayan9/cagayan9.module').then( m => m.Cagayan9PageModule)
  },
  {
    path: 'cagayan10',
    loadChildren: () => import('./cagayan10/cagayan10.module').then( m => m.Cagayan10PageModule)
  },
  {
    path: 'isabela',
    loadChildren: () => import('./isabela/isabela.module').then( m => m.IsabelaPageModule)
  },
  {
    path: 'isabela1',
    loadChildren: () => import('./isabela1/isabela1.module').then( m => m.Isabela1PageModule)
  },
  {
    path: 'isabela2',
    loadChildren: () => import('./isabela2/isabela2.module').then( m => m.Isabela2PageModule)
  },
  {
    path: 'isabela3',
    loadChildren: () => import('./isabela3/isabela3.module').then( m => m.Isabela3PageModule)
  },
  {
    path: 'isabela4',
    loadChildren: () => import('./isabela4/isabela4.module').then( m => m.Isabela4PageModule)
  },
  {
    path: 'isabela5',
    loadChildren: () => import('./isabela5/isabela5.module').then( m => m.Isabela5PageModule)
  },
  {
    path: 'isabela6',
    loadChildren: () => import('./isabela6/isabela6.module').then( m => m.Isabela6PageModule)
  },
  {
    path: 'isabela7',
    loadChildren: () => import('./isabela7/isabela7.module').then( m => m.Isabela7PageModule)
  },
  {
    path: 'isabela8',
    loadChildren: () => import('./isabela8/isabela8.module').then( m => m.Isabela8PageModule)
  },
  {
    path: 'isabela9',
    loadChildren: () => import('./isabela9/isabela9.module').then( m => m.Isabela9PageModule)
  },
  {
    path: 'isabela10',
    loadChildren: () => import('./isabela10/isabela10.module').then( m => m.Isabela10PageModule)
  },
  {
    path: 'nueva-v',
    loadChildren: () => import('./nueva-v/nueva-v.module').then( m => m.NuevaVPageModule)
  },
  {
    path: 'nueva-v1',
    loadChildren: () => import('./nueva-v1/nueva-v1.module').then( m => m.NuevaV1PageModule)
  },
  {
    path: 'nueva-v2',
    loadChildren: () => import('./nueva-v2/nueva-v2.module').then( m => m.NuevaV2PageModule)
  },
  {
    path: 'nueva-v3',
    loadChildren: () => import('./nueva-v3/nueva-v3.module').then( m => m.NuevaV3PageModule)
  },
  {
    path: 'nueva-v4',
    loadChildren: () => import('./nueva-v4/nueva-v4.module').then( m => m.NuevaV4PageModule)
  },
  {
    path: 'nueva-v5',
    loadChildren: () => import('./nueva-v5/nueva-v5.module').then( m => m.NuevaV5PageModule)
  },
  {
    path: 'nueva-v6',
    loadChildren: () => import('./nueva-v6/nueva-v6.module').then( m => m.NuevaV6PageModule)
  },
  {
    path: 'nueva-v7',
    loadChildren: () => import('./nueva-v7/nueva-v7.module').then( m => m.NuevaV7PageModule)
  },
  {
    path: 'nueva-v8',
    loadChildren: () => import('./nueva-v8/nueva-v8.module').then( m => m.NuevaV8PageModule)
  },
  {
    path: 'nueva-v9',
    loadChildren: () => import('./nueva-v9/nueva-v9.module').then( m => m.NuevaV9PageModule)
  },
  {
    path: 'nueva-v10',
    loadChildren: () => import('./nueva-v10/nueva-v10.module').then( m => m.NuevaV10PageModule)
  },
  {
    path: 'quirino',
    loadChildren: () => import('./quirino/quirino.module').then( m => m.QuirinoPageModule)
  },
  {
    path: 'quirino1',
    loadChildren: () => import('./quirino1/quirino1.module').then( m => m.Quirino1PageModule)
  },
  {
    path: 'quirino2',
    loadChildren: () => import('./quirino2/quirino2.module').then( m => m.Quirino2PageModule)
  },
  {
    path: 'quirino3',
    loadChildren: () => import('./quirino3/quirino3.module').then( m => m.Quirino3PageModule)
  },
  {
    path: 'quirino4',
    loadChildren: () => import('./quirino4/quirino4.module').then( m => m.Quirino4PageModule)
  },
  {
    path: 'quirino5',
    loadChildren: () => import('./quirino5/quirino5.module').then( m => m.Quirino5PageModule)
  },
  {
    path: 'quirino6',
    loadChildren: () => import('./quirino6/quirino6.module').then( m => m.Quirino6PageModule)
  },
  {
    path: 'quirino7',
    loadChildren: () => import('./quirino7/quirino7.module').then( m => m.Quirino7PageModule)
  },
  {
    path: 'quirino8',
    loadChildren: () => import('./quirino8/quirino8.module').then( m => m.Quirino8PageModule)
  },
  {
    path: 'quirino9',
    loadChildren: () => import('./quirino9/quirino9.module').then( m => m.Quirino9PageModule)
  },
  {
    path: 'quirino10',
    loadChildren: () => import('./quirino10/quirino10.module').then( m => m.Quirino10PageModule)
  },
  {
    path: 'aurora',
    loadChildren: () => import('./aurora/aurora.module').then( m => m.AuroraPageModule)
  },
  {
    path: 'bataan',
    loadChildren: () => import('./bataan/bataan.module').then( m => m.BataanPageModule)
  },
  {
    path: 'bataan1',
    loadChildren: () => import('./bataan1/bataan1.module').then( m => m.Bataan1PageModule)
  },
  {
    path: 'bataan2',
    loadChildren: () => import('./bataan2/bataan2.module').then( m => m.Bataan2PageModule)
  },
  {
    path: 'bataan3',
    loadChildren: () => import('./bataan3/bataan3.module').then( m => m.Bataan3PageModule)
  },
  {
    path: 'bataan4',
    loadChildren: () => import('./bataan4/bataan4.module').then( m => m.Bataan4PageModule)
  },
  {
    path: 'bataan5',
    loadChildren: () => import('./bataan5/bataan5.module').then( m => m.Bataan5PageModule)
  },
  {
    path: 'bataan6',
    loadChildren: () => import('./bataan6/bataan6.module').then( m => m.Bataan6PageModule)
  },
  {
    path: 'bataan7',
    loadChildren: () => import('./bataan7/bataan7.module').then( m => m.Bataan7PageModule)
  },
  {
    path: 'bataan8',
    loadChildren: () => import('./bataan8/bataan8.module').then( m => m.Bataan8PageModule)
  },
  {
    path: 'bataan9',
    loadChildren: () => import('./bataan9/bataan9.module').then( m => m.Bataan9PageModule)
  },
  {
    path: 'bataan10',
    loadChildren: () => import('./bataan10/bataan10.module').then( m => m.Bataan10PageModule)
  },
  {
    path: 'bulacan',
    loadChildren: () => import('./bulacan/bulacan.module').then( m => m.BulacanPageModule)
  },
  {
    path: 'bulacan1',
    loadChildren: () => import('./bulacan1/bulacan1.module').then( m => m.Bulacan1PageModule)
  },
  {
    path: 'bulacan2',
    loadChildren: () => import('./bulacan2/bulacan2.module').then( m => m.Bulacan2PageModule)
  },
  {
    path: 'bulacan3',
    loadChildren: () => import('./bulacan3/bulacan3.module').then( m => m.Bulacan3PageModule)
  },
  {
    path: 'bulacan4',
    loadChildren: () => import('./bulacan4/bulacan4.module').then( m => m.Bulacan4PageModule)
  },
  {
    path: 'bulacan5',
    loadChildren: () => import('./bulacan5/bulacan5.module').then( m => m.Bulacan5PageModule)
  },
  {
    path: 'bulacan6',
    loadChildren: () => import('./bulacan6/bulacan6.module').then( m => m.Bulacan6PageModule)
  },
  {
    path: 'bulacan7',
    loadChildren: () => import('./bulacan7/bulacan7.module').then( m => m.Bulacan7PageModule)
  },
  {
    path: 'bulacan8',
    loadChildren: () => import('./bulacan8/bulacan8.module').then( m => m.Bulacan8PageModule)
  },
  {
    path: 'bulacan9',
    loadChildren: () => import('./bulacan9/bulacan9.module').then( m => m.Bulacan9PageModule)
  },
  {
    path: 'bulacan10',
    loadChildren: () => import('./bulacan10/bulacan10.module').then( m => m.Bulacan10PageModule)
  },
  {
    path: 'nueva-e',
    loadChildren: () => import('./nueva-e/nueva-e.module').then( m => m.NuevaEPageModule)
  },
  {
    path: 'nueva-e1',
    loadChildren: () => import('./nueva-e1/nueva-e1.module').then( m => m.NuevaE1PageModule)
  },
  {
    path: 'nueva-e2',
    loadChildren: () => import('./nueva-e2/nueva-e2.module').then( m => m.NuevaE2PageModule)
  },
  {
    path: 'nueva-e3',
    loadChildren: () => import('./nueva-e3/nueva-e3.module').then( m => m.NuevaE3PageModule)
  },
  {
    path: 'nueva-e4',
    loadChildren: () => import('./nueva-e4/nueva-e4.module').then( m => m.NuevaE4PageModule)
  },
  {
    path: 'nueva-e5',
    loadChildren: () => import('./nueva-e5/nueva-e5.module').then( m => m.NuevaE5PageModule)
  },
  {
    path: 'nueva-e6',
    loadChildren: () => import('./nueva-e6/nueva-e6.module').then( m => m.NuevaE6PageModule)
  },
  {
    path: 'nueva-e7',
    loadChildren: () => import('./nueva-e7/nueva-e7.module').then( m => m.NuevaE7PageModule)
  },
  {
    path: 'nueva-e8',
    loadChildren: () => import('./nueva-e8/nueva-e8.module').then( m => m.NuevaE8PageModule)
  },
  {
    path: 'nueva-e9',
    loadChildren: () => import('./nueva-e9/nueva-e9.module').then( m => m.NuevaE9PageModule)
  },
  {
    path: 'nueva-e10',
    loadChildren: () => import('./nueva-e10/nueva-e10.module').then( m => m.NuevaE10PageModule)
  },
  {
    path: 'pampanga',
    loadChildren: () => import('./pampanga/pampanga.module').then( m => m.PampangaPageModule)
  },
  {
    path: 'pampanga1',
    loadChildren: () => import('./pampanga1/pampanga1.module').then( m => m.Pampanga1PageModule)
  },
  {
    path: 'pampanga2',
    loadChildren: () => import('./pampanga2/pampanga2.module').then( m => m.Pampanga2PageModule)
  },
  {
    path: 'pampanga3',
    loadChildren: () => import('./pampanga3/pampanga3.module').then( m => m.Pampanga3PageModule)
  },
  {
    path: 'pampanga4',
    loadChildren: () => import('./pampanga4/pampanga4.module').then( m => m.Pampanga4PageModule)
  },
  {
    path: 'pampanga5',
    loadChildren: () => import('./pampanga5/pampanga5.module').then( m => m.Pampanga5PageModule)
  },
  {
    path: 'pampanga6',
    loadChildren: () => import('./pampanga6/pampanga6.module').then( m => m.Pampanga6PageModule)
  },
  {
    path: 'pampanga7',
    loadChildren: () => import('./pampanga7/pampanga7.module').then( m => m.Pampanga7PageModule)
  },
  {
    path: 'pampanga8',
    loadChildren: () => import('./pampanga8/pampanga8.module').then( m => m.Pampanga8PageModule)
  },
  {
    path: 'pampanga9',
    loadChildren: () => import('./pampanga9/pampanga9.module').then( m => m.Pampanga9PageModule)
  },
  {
    path: 'pampanga10',
    loadChildren: () => import('./pampanga10/pampanga10.module').then( m => m.Pampanga10PageModule)
  },
  {
    path: 'tarlac',
    loadChildren: () => import('./tarlac/tarlac.module').then( m => m.TarlacPageModule)
  },
  {
    path: 'tarlac1',
    loadChildren: () => import('./tarlac1/tarlac1.module').then( m => m.Tarlac1PageModule)
  },
  {
    path: 'tarlac2',
    loadChildren: () => import('./tarlac2/tarlac2.module').then( m => m.Tarlac2PageModule)
  },
  {
    path: 'tarlac3',
    loadChildren: () => import('./tarlac3/tarlac3.module').then( m => m.Tarlac3PageModule)
  },
  {
    path: 'tarlac4',
    loadChildren: () => import('./tarlac4/tarlac4.module').then( m => m.Tarlac4PageModule)
  },
  {
    path: 'tarlac5',
    loadChildren: () => import('./tarlac5/tarlac5.module').then( m => m.Tarlac5PageModule)
  },
  {
    path: 'tarlac6',
    loadChildren: () => import('./tarlac6/tarlac6.module').then( m => m.Tarlac6PageModule)
  },
  {
    path: 'tarlac7',
    loadChildren: () => import('./tarlac7/tarlac7.module').then( m => m.Tarlac7PageModule)
  },
  {
    path: 'tarlac8',
    loadChildren: () => import('./tarlac8/tarlac8.module').then( m => m.Tarlac8PageModule)
  },
  {
    path: 'tarlac9',
    loadChildren: () => import('./tarlac9/tarlac9.module').then( m => m.Tarlac9PageModule)
  },
  {
    path: 'tarlac10',
    loadChildren: () => import('./tarlac10/tarlac10.module').then( m => m.Tarlac10PageModule)
  },
  {
    path: 'zambales',
    loadChildren: () => import('./zambales/zambales.module').then( m => m.ZambalesPageModule)
  },
  {
    path: 'zambales1',
    loadChildren: () => import('./zambales1/zambales1.module').then( m => m.Zambales1PageModule)
  },
  {
    path: 'zambales2',
    loadChildren: () => import('./zambales2/zambales2.module').then( m => m.Zambales2PageModule)
  },
  {
    path: 'zambales3',
    loadChildren: () => import('./zambales3/zambales3.module').then( m => m.Zambales3PageModule)
  },
  {
    path: 'zambales4',
    loadChildren: () => import('./zambales4/zambales4.module').then( m => m.Zambales4PageModule)
  },
  {
    path: 'zambales5',
    loadChildren: () => import('./zambales5/zambales5.module').then( m => m.Zambales5PageModule)
  },
  {
    path: 'zambales6',
    loadChildren: () => import('./zambales6/zambales6.module').then( m => m.Zambales6PageModule)
  },
  {
    path: 'zambales7',
    loadChildren: () => import('./zambales7/zambales7.module').then( m => m.Zambales7PageModule)
  },
  {
    path: 'zambales8',
    loadChildren: () => import('./zambales8/zambales8.module').then( m => m.Zambales8PageModule)
  },
  {
    path: 'zambales9',
    loadChildren: () => import('./zambales9/zambales9.module').then( m => m.Zambales9PageModule)
  },
  {
    path: 'zambales10',
    loadChildren: () => import('./zambales10/zambales10.module').then( m => m.Zambales10PageModule)
  },
  {
    path: 'cavite',
    loadChildren: () => import('./cavite/cavite.module').then( m => m.CavitePageModule)
  },
  {
    path: 'cavite1',
    loadChildren: () => import('./cavite1/cavite1.module').then( m => m.Cavite1PageModule)
  },
  {
    path: 'cavite2',
    loadChildren: () => import('./cavite2/cavite2.module').then( m => m.Cavite2PageModule)
  },
  {
    path: 'cavite3',
    loadChildren: () => import('./cavite3/cavite3.module').then( m => m.Cavite3PageModule)
  },
  {
    path: 'cavite4',
    loadChildren: () => import('./cavite4/cavite4.module').then( m => m.Cavite4PageModule)
  },
  {
    path: 'cavite5',
    loadChildren: () => import('./cavite5/cavite5.module').then( m => m.Cavite5PageModule)
  },
  {
    path: 'cavite6',
    loadChildren: () => import('./cavite6/cavite6.module').then( m => m.Cavite6PageModule)
  },
  {
    path: 'cavite7',
    loadChildren: () => import('./cavite7/cavite7.module').then( m => m.Cavite7PageModule)
  },
  {
    path: 'cavite8',
    loadChildren: () => import('./cavite8/cavite8.module').then( m => m.Cavite8PageModule)
  },
  {
    path: 'cavite9',
    loadChildren: () => import('./cavite9/cavite9.module').then( m => m.Cavite9PageModule)
  },
  {
    path: 'cavite10',
    loadChildren: () => import('./cavite10/cavite10.module').then( m => m.Cavite10PageModule)
  },
  {
    path: 'laguna',
    loadChildren: () => import('./laguna/laguna.module').then( m => m.LagunaPageModule)
  },
  {
    path: 'laguna1',
    loadChildren: () => import('./laguna1/laguna1.module').then( m => m.Laguna1PageModule)
  },
  {
    path: 'laguna2',
    loadChildren: () => import('./laguna2/laguna2.module').then( m => m.Laguna2PageModule)
  },
  {
    path: 'laguna3',
    loadChildren: () => import('./laguna3/laguna3.module').then( m => m.Laguna3PageModule)
  },
  {
    path: 'laguna4',
    loadChildren: () => import('./laguna4/laguna4.module').then( m => m.Laguna4PageModule)
  },
  {
    path: 'laguna5',
    loadChildren: () => import('./laguna5/laguna5.module').then( m => m.Laguna5PageModule)
  },
  {
    path: 'laguna6',
    loadChildren: () => import('./laguna6/laguna6.module').then( m => m.Laguna6PageModule)
  },
  {
    path: 'laguna7',
    loadChildren: () => import('./laguna7/laguna7.module').then( m => m.Laguna7PageModule)
  },
  {
    path: 'laguna8',
    loadChildren: () => import('./laguna8/laguna8.module').then( m => m.Laguna8PageModule)
  },
  {
    path: 'laguna9',
    loadChildren: () => import('./laguna9/laguna9.module').then( m => m.Laguna9PageModule)
  },
  {
    path: 'laguna10',
    loadChildren: () => import('./laguna10/laguna10.module').then( m => m.Laguna10PageModule)
  },
  {
    path: 'batangas',
    loadChildren: () => import('./batangas/batangas.module').then( m => m.BatangasPageModule)
  },
  {
    path: 'batangas1',
    loadChildren: () => import('./batangas1/batangas1.module').then( m => m.Batangas1PageModule)
  },
  {
    path: 'batangas2',
    loadChildren: () => import('./batangas2/batangas2.module').then( m => m.Batangas2PageModule)
  },
  {
    path: 'batangas3',
    loadChildren: () => import('./batangas3/batangas3.module').then( m => m.Batangas3PageModule)
  },
  {
    path: 'batangas4',
    loadChildren: () => import('./batangas4/batangas4.module').then( m => m.Batangas4PageModule)
  },
  {
    path: 'batangas5',
    loadChildren: () => import('./batangas5/batangas5.module').then( m => m.Batangas5PageModule)
  },
  {
    path: 'batangas6',
    loadChildren: () => import('./batangas6/batangas6.module').then( m => m.Batangas6PageModule)
  },
  {
    path: 'batangas7',
    loadChildren: () => import('./batangas7/batangas7.module').then( m => m.Batangas7PageModule)
  },
  {
    path: 'batangas8',
    loadChildren: () => import('./batangas8/batangas8.module').then( m => m.Batangas8PageModule)
  },
  {
    path: 'batangas9',
    loadChildren: () => import('./batangas9/batangas9.module').then( m => m.Batangas9PageModule)
  },
  {
    path: 'batangas10',
    loadChildren: () => import('./batangas10/batangas10.module').then( m => m.Batangas10PageModule)
  },
  {
    path: 'rizal',
    loadChildren: () => import('./rizal/rizal.module').then( m => m.RizalPageModule)
  },
  {
    path: 'rizal1',
    loadChildren: () => import('./rizal1/rizal1.module').then( m => m.Rizal1PageModule)
  },
  {
    path: 'rizal2',
    loadChildren: () => import('./rizal2/rizal2.module').then( m => m.Rizal2PageModule)
  },
  {
    path: 'rizal3',
    loadChildren: () => import('./rizal3/rizal3.module').then( m => m.Rizal3PageModule)
  },
  {
    path: 'rizal4',
    loadChildren: () => import('./rizal4/rizal4.module').then( m => m.Rizal4PageModule)
  },
  {
    path: 'rizal5',
    loadChildren: () => import('./rizal5/rizal5.module').then( m => m.Rizal5PageModule)
  },
  {
    path: 'rizal6',
    loadChildren: () => import('./rizal6/rizal6.module').then( m => m.Rizal6PageModule)
  },
  {
    path: 'rizal7',
    loadChildren: () => import('./rizal7/rizal7.module').then( m => m.Rizal7PageModule)
  },
  {
    path: 'rizal8',
    loadChildren: () => import('./rizal8/rizal8.module').then( m => m.Rizal8PageModule)
  },
  {
    path: 'rizal9',
    loadChildren: () => import('./rizal9/rizal9.module').then( m => m.Rizal9PageModule)
  },
  {
    path: 'rizal10',
    loadChildren: () => import('./rizal10/rizal10.module').then( m => m.Rizal10PageModule)
  },
  {
    path: 'quezon',
    loadChildren: () => import('./quezon/quezon.module').then( m => m.QuezonPageModule)
  },
  {
    path: 'quezon1',
    loadChildren: () => import('./quezon1/quezon1.module').then( m => m.Quezon1PageModule)
  },
  {
    path: 'quezon2',
    loadChildren: () => import('./quezon2/quezon2.module').then( m => m.Quezon2PageModule)
  },
  {
    path: 'quezon3',
    loadChildren: () => import('./quezon3/quezon3.module').then( m => m.Quezon3PageModule)
  },
  {
    path: 'quezon4',
    loadChildren: () => import('./quezon4/quezon4.module').then( m => m.Quezon4PageModule)
  },
  {
    path: 'quezon5',
    loadChildren: () => import('./quezon5/quezon5.module').then( m => m.Quezon5PageModule)
  },
  {
    path: 'quezon6',
    loadChildren: () => import('./quezon6/quezon6.module').then( m => m.Quezon6PageModule)
  },
  {
    path: 'quezon7',
    loadChildren: () => import('./quezon7/quezon7.module').then( m => m.Quezon7PageModule)
  },
  {
    path: 'quezon8',
    loadChildren: () => import('./quezon8/quezon8.module').then( m => m.Quezon8PageModule)
  },
  {
    path: 'quezon9',
    loadChildren: () => import('./quezon9/quezon9.module').then( m => m.Quezon9PageModule)
  },
  {
    path: 'quezon10',
    loadChildren: () => import('./quezon10/quezon10.module').then( m => m.Quezon10PageModule)
  },
  {
    path: 'occcidental-m',
    loadChildren: () => import('./occcidental-m/occcidental-m.module').then( m => m.OcccidentalMPageModule)
  },
  {
    path: 'occcidental-m1',
    loadChildren: () => import('./occcidental-m1/occcidental-m1.module').then( m => m.OcccidentalM1PageModule)
  },
  {
    path: 'occcidental-m2',
    loadChildren: () => import('./occcidental-m2/occcidental-m2.module').then( m => m.OcccidentalM2PageModule)
  },
  {
    path: 'occcidental-m3',
    loadChildren: () => import('./occcidental-m3/occcidental-m3.module').then( m => m.OcccidentalM3PageModule)
  },
  {
    path: 'oriental-m',
    loadChildren: () => import('./oriental-m/oriental-m.module').then( m => m.OrientalMPageModule)
  },
  {
    path: 'oriental-m1',
    loadChildren: () => import('./oriental-m1/oriental-m1.module').then( m => m.OrientalM1PageModule)
  },
  {
    path: 'oriental-m2',
    loadChildren: () => import('./oriental-m2/oriental-m2.module').then( m => m.OrientalM2PageModule)
  },
  {
    path: 'oriental-m3',
    loadChildren: () => import('./oriental-m3/oriental-m3.module').then( m => m.OrientalM3PageModule)
  },
  {
    path: 'marinduque',
    loadChildren: () => import('./marinduque/marinduque.module').then( m => m.MarinduquePageModule)
  },
  {
    path: 'marinduque1',
    loadChildren: () => import('./marinduque1/marinduque1.module').then( m => m.Marinduque1PageModule)
  },
  {
    path: 'marinduque2',
    loadChildren: () => import('./marinduque2/marinduque2.module').then( m => m.Marinduque2PageModule)
  },
  {
    path: 'palawan',
    loadChildren: () => import('./palawan/palawan.module').then( m => m.PalawanPageModule)
  },
  {
    path: 'palawan1',
    loadChildren: () => import('./palawan1/palawan1.module').then( m => m.Palawan1PageModule)
  },
  {
    path: 'palawan2',
    loadChildren: () => import('./palawan2/palawan2.module').then( m => m.Palawan2PageModule)
  },
  {
    path: 'roblon',
    loadChildren: () => import('./roblon/roblon.module').then( m => m.RoblonPageModule)
  },
  {
    path: 'roblon1',
    loadChildren: () => import('./roblon1/roblon1.module').then( m => m.Roblon1PageModule)
  },
  {
    path: 'roblon2',
    loadChildren: () => import('./roblon2/roblon2.module').then( m => m.Roblon2PageModule)
  },
  {
    path: 'roblon3',
    loadChildren: () => import('./roblon3/roblon3.module').then( m => m.Roblon3PageModule)
  },
  {
    path: 'palawan3',
    loadChildren: () => import('./palawan3/palawan3.module').then( m => m.Palawan3PageModule)
  },
  {
    path: 'albay',
    loadChildren: () => import('./albay/albay.module').then( m => m.AlbayPageModule)
  },
  {
    path: 'albay1',
    loadChildren: () => import('./albay1/albay1.module').then( m => m.Albay1PageModule)
  },
  {
    path: 'albay2',
    loadChildren: () => import('./albay2/albay2.module').then( m => m.Albay2PageModule)
  },
  {
    path: 'albay3',
    loadChildren: () => import('./albay3/albay3.module').then( m => m.Albay3PageModule)
  },
  {
    path: 'albay4',
    loadChildren: () => import('./albay4/albay4.module').then( m => m.Albay4PageModule)
  },
  {
    path: 'albay5',
    loadChildren: () => import('./albay5/albay5.module').then( m => m.Albay5PageModule)
  },
  {
    path: 'albay6',
    loadChildren: () => import('./albay6/albay6.module').then( m => m.Albay6PageModule)
  },
  {
    path: 'albay7',
    loadChildren: () => import('./albay7/albay7.module').then( m => m.Albay7PageModule)
  },
  {
    path: 'albay8',
    loadChildren: () => import('./albay8/albay8.module').then( m => m.Albay8PageModule)
  },
  {
    path: 'albay9',
    loadChildren: () => import('./albay9/albay9.module').then( m => m.Albay9PageModule)
  },
  {
    path: 'albay10',
    loadChildren: () => import('./albay10/albay10.module').then( m => m.Albay10PageModule)
  },
  {
    path: 'camarines-n',
    loadChildren: () => import('./camarines-n/camarines-n.module').then( m => m.CamarinesNPageModule)
  },
  {
    path: 'camarines-n1',
    loadChildren: () => import('./camarines-n1/camarines-n1.module').then( m => m.CamarinesN1PageModule)
  },
  {
    path: 'camarines-n2',
    loadChildren: () => import('./camarines-n2/camarines-n2.module').then( m => m.CamarinesN2PageModule)
  },
  {
    path: 'camarines-n3',
    loadChildren: () => import('./camarines-n3/camarines-n3.module').then( m => m.CamarinesN3PageModule)
  },
  {
    path: 'camarines-n4',
    loadChildren: () => import('./camarines-n4/camarines-n4.module').then( m => m.CamarinesN4PageModule)
  },
  {
    path: 'camarines-n5',
    loadChildren: () => import('./camarines-n5/camarines-n5.module').then( m => m.CamarinesN5PageModule)
  },
  {
    path: 'camarines-s',
    loadChildren: () => import('./camarines-s/camarines-s.module').then( m => m.CamarinesSPageModule)
  },
  {
    path: 'camarines-s1',
    loadChildren: () => import('./camarines-s1/camarines-s1.module').then( m => m.CamarinesS1PageModule)
  },
  {
    path: 'camarines-s2',
    loadChildren: () => import('./camarines-s2/camarines-s2.module').then( m => m.CamarinesS2PageModule)
  },
  {
    path: 'camarines-s3',
    loadChildren: () => import('./camarines-s3/camarines-s3.module').then( m => m.CamarinesS3PageModule)
  },
  {
    path: 'camarines-s4',
    loadChildren: () => import('./camarines-s4/camarines-s4.module').then( m => m.CamarinesS4PageModule)
  },
  {
    path: 'camarines-s5',
    loadChildren: () => import('./camarines-s5/camarines-s5.module').then( m => m.CamarinesS5PageModule)
  },
  {
    path: 'camarines-s6',
    loadChildren: () => import('./camarines-s6/camarines-s6.module').then( m => m.CamarinesS6PageModule)
  },
  {
    path: 'camarines-s7',
    loadChildren: () => import('./camarines-s7/camarines-s7.module').then( m => m.CamarinesS7PageModule)
  },
  {
    path: 'camarines-s8',
    loadChildren: () => import('./camarines-s8/camarines-s8.module').then( m => m.CamarinesS8PageModule)
  },
  {
    path: 'camarines-s9',
    loadChildren: () => import('./camarines-s9/camarines-s9.module').then( m => m.CamarinesS9PageModule)
  },
  {
    path: 'camarines-s10',
    loadChildren: () => import('./camarines-s10/camarines-s10.module').then( m => m.CamarinesS10PageModule)
  },
  {
    path: 'catanduanes',
    loadChildren: () => import('./catanduanes/catanduanes.module').then( m => m.CatanduanesPageModule)
  },
  {
    path: 'catanduanes1',
    loadChildren: () => import('./catanduanes1/catanduanes1.module').then( m => m.Catanduanes1PageModule)
  },
  {
    path: 'catanduanes2',
    loadChildren: () => import('./catanduanes2/catanduanes2.module').then( m => m.Catanduanes2PageModule)
  },
  {
    path: 'catanduanes3',
    loadChildren: () => import('./catanduanes3/catanduanes3.module').then( m => m.Catanduanes3PageModule)
  },
  {
    path: 'catanduanes4',
    loadChildren: () => import('./catanduanes4/catanduanes4.module').then( m => m.Catanduanes4PageModule)
  },
  {
    path: 'catanduanes5',
    loadChildren: () => import('./catanduanes5/catanduanes5.module').then( m => m.Catanduanes5PageModule)
  },
  {
    path: 'masbate',
    loadChildren: () => import('./masbate/masbate.module').then( m => m.MasbatePageModule)
  },
  {
    path: 'masbate1',
    loadChildren: () => import('./masbate1/masbate1.module').then( m => m.Masbate1PageModule)
  },
  {
    path: 'masbate2',
    loadChildren: () => import('./masbate2/masbate2.module').then( m => m.Masbate2PageModule)
  },
  {
    path: 'masbate3',
    loadChildren: () => import('./masbate3/masbate3.module').then( m => m.Masbate3PageModule)
  },
  {
    path: 'sorsogon',
    loadChildren: () => import('./sorsogon/sorsogon.module').then( m => m.SorsogonPageModule)
  },
  {
    path: 'sorsogon1',
    loadChildren: () => import('./sorsogon1/sorsogon1.module').then( m => m.Sorsogon1PageModule)
  },
  {
    path: 'sorsogon2',
    loadChildren: () => import('./sorsogon2/sorsogon2.module').then( m => m.Sorsogon2PageModule)
  },
  {
    path: 'sorsogon3',
    loadChildren: () => import('./sorsogon3/sorsogon3.module').then( m => m.Sorsogon3PageModule)
  },
  {
    path: 'sorsogon4',
    loadChildren: () => import('./sorsogon4/sorsogon4.module').then( m => m.Sorsogon4PageModule)
  },
  {
    path: 'region6',
    loadChildren: () => import('./region6/region6.module').then( m => m.Region6PageModule)
  },
  {
    path: 'aklan',
    loadChildren: () => import('./aklan/aklan.module').then( m => m.AklanPageModule)
  },
  {
    path: 'aklan1',
    loadChildren: () => import('./aklan1/aklan1.module').then( m => m.Aklan1PageModule)
  },
  {
    path: 'aklan2',
    loadChildren: () => import('./aklan2/aklan2.module').then( m => m.Aklan2PageModule)
  },
  {
    path: 'aklan3',
    loadChildren: () => import('./aklan3/aklan3.module').then( m => m.Aklan3PageModule)
  },
  {
    path: 'aklan4',
    loadChildren: () => import('./aklan4/aklan4.module').then( m => m.Aklan4PageModule)
  },
  {
    path: 'aklan5',
    loadChildren: () => import('./aklan5/aklan5.module').then( m => m.Aklan5PageModule)
  },
  {
    path: 'aklan6',
    loadChildren: () => import('./aklan6/aklan6.module').then( m => m.Aklan6PageModule)
  },
  {
    path: 'aklan7',
    loadChildren: () => import('./aklan7/aklan7.module').then( m => m.Aklan7PageModule)
  },
  {
    path: 'aklan8',
    loadChildren: () => import('./aklan8/aklan8.module').then( m => m.Aklan8PageModule)
  },
  {
    path: 'aklan9',
    loadChildren: () => import('./aklan9/aklan9.module').then( m => m.Aklan9PageModule)
  },
  {
    path: 'aklan10',
    loadChildren: () => import('./aklan10/aklan10.module').then( m => m.Aklan10PageModule)
  },
  {
    path: 'antique',
    loadChildren: () => import('./antique/antique.module').then( m => m.AntiquePageModule)
  },
  {
    path: 'antique1',
    loadChildren: () => import('./antique1/antique1.module').then( m => m.Antique1PageModule)
  },
  {
    path: 'antique2',
    loadChildren: () => import('./antique2/antique2.module').then( m => m.Antique2PageModule)
  },
  {
    path: 'antique3',
    loadChildren: () => import('./antique3/antique3.module').then( m => m.Antique3PageModule)
  },
  {
    path: 'antique4',
    loadChildren: () => import('./antique4/antique4.module').then( m => m.Antique4PageModule)
  },
  {
    path: 'antique5',
    loadChildren: () => import('./antique5/antique5.module').then( m => m.Antique5PageModule)
  },
  {
    path: 'antique6',
    loadChildren: () => import('./antique6/antique6.module').then( m => m.Antique6PageModule)
  },
  {
    path: 'antique7',
    loadChildren: () => import('./antique7/antique7.module').then( m => m.Antique7PageModule)
  },
  {
    path: 'antique8',
    loadChildren: () => import('./antique8/antique8.module').then( m => m.Antique8PageModule)
  },
  {
    path: 'antique9',
    loadChildren: () => import('./antique9/antique9.module').then( m => m.Antique9PageModule)
  },
  {
    path: 'antique10',
    loadChildren: () => import('./antique10/antique10.module').then( m => m.Antique10PageModule)
  },
  {
    path: 'capiz',
    loadChildren: () => import('./capiz/capiz.module').then( m => m.CapizPageModule)
  },
  {
    path: 'capiz1',
    loadChildren: () => import('./capiz1/capiz1.module').then( m => m.Capiz1PageModule)
  },
  {
    path: 'capiz2',
    loadChildren: () => import('./capiz2/capiz2.module').then( m => m.Capiz2PageModule)
  },
  {
    path: 'capiz3',
    loadChildren: () => import('./capiz3/capiz3.module').then( m => m.Capiz3PageModule)
  },
  {
    path: 'capiz4',
    loadChildren: () => import('./capiz4/capiz4.module').then( m => m.Capiz4PageModule)
  },
  {
    path: 'capiz5',
    loadChildren: () => import('./capiz5/capiz5.module').then( m => m.Capiz5PageModule)
  },
  {
    path: 'capiz6',
    loadChildren: () => import('./capiz6/capiz6.module').then( m => m.Capiz6PageModule)
  },
  {
    path: 'capiz7',
    loadChildren: () => import('./capiz7/capiz7.module').then( m => m.Capiz7PageModule)
  },
  {
    path: 'capiz8',
    loadChildren: () => import('./capiz8/capiz8.module').then( m => m.Capiz8PageModule)
  },
  {
    path: 'capiz9',
    loadChildren: () => import('./capiz9/capiz9.module').then( m => m.Capiz9PageModule)
  },
  {
    path: 'capiz10',
    loadChildren: () => import('./capiz10/capiz10.module').then( m => m.Capiz10PageModule)
  },
  {
    path: 'guimaras',
    loadChildren: () => import('./guimaras/guimaras.module').then( m => m.GuimarasPageModule)
  },
  {
    path: 'guimaras1',
    loadChildren: () => import('./guimaras1/guimaras1.module').then( m => m.Guimaras1PageModule)
  },
  {
    path: 'guimaras2',
    loadChildren: () => import('./guimaras2/guimaras2.module').then( m => m.Guimaras2PageModule)
  },
  {
    path: 'guimaras3',
    loadChildren: () => import('./guimaras3/guimaras3.module').then( m => m.Guimaras3PageModule)
  },
  {
    path: 'iloilo',
    loadChildren: () => import('./iloilo/iloilo.module').then( m => m.IloiloPageModule)
  },
  {
    path: 'iloilo1',
    loadChildren: () => import('./iloilo1/iloilo1.module').then( m => m.Iloilo1PageModule)
  },
  {
    path: 'iloilo2',
    loadChildren: () => import('./iloilo2/iloilo2.module').then( m => m.Iloilo2PageModule)
  },
  {
    path: 'iloilo3',
    loadChildren: () => import('./iloilo3/iloilo3.module').then( m => m.Iloilo3PageModule)
  },
  {
    path: 'iloilo4',
    loadChildren: () => import('./iloilo4/iloilo4.module').then( m => m.Iloilo4PageModule)
  },
  {
    path: 'iloilo5',
    loadChildren: () => import('./iloilo5/iloilo5.module').then( m => m.Iloilo5PageModule)
  },
  {
    path: 'iloilo6',
    loadChildren: () => import('./iloilo6/iloilo6.module').then( m => m.Iloilo6PageModule)
  },
  {
    path: 'iloilo7',
    loadChildren: () => import('./iloilo7/iloilo7.module').then( m => m.Iloilo7PageModule)
  },
  {
    path: 'iloilo8',
    loadChildren: () => import('./iloilo8/iloilo8.module').then( m => m.Iloilo8PageModule)
  },
  {
    path: 'iloilo9',
    loadChildren: () => import('./iloilo9/iloilo9.module').then( m => m.Iloilo9PageModule)
  },
  {
    path: 'iloilo10',
    loadChildren: () => import('./iloilo10/iloilo10.module').then( m => m.Iloilo10PageModule)
  },
  {
    path: 'negros-o',
    loadChildren: () => import('./negros-o/negros-o.module').then( m => m.NegrosOPageModule)
  },
  {
    path: 'negros-o1',
    loadChildren: () => import('./negros-o1/negros-o1.module').then( m => m.NegrosO1PageModule)
  },
  {
    path: 'negros-o2',
    loadChildren: () => import('./negros-o2/negros-o2.module').then( m => m.NegrosO2PageModule)
  },
  {
    path: 'negros-o3',
    loadChildren: () => import('./negros-o3/negros-o3.module').then( m => m.NegrosO3PageModule)
  },
  {
    path: 'negros-o4',
    loadChildren: () => import('./negros-o4/negros-o4.module').then( m => m.NegrosO4PageModule)
  },
  {
    path: 'negros-o5',
    loadChildren: () => import('./negros-o5/negros-o5.module').then( m => m.NegrosO5PageModule)
  },
  {
    path: 'negros-o6',
    loadChildren: () => import('./negros-o6/negros-o6.module').then( m => m.NegrosO6PageModule)
  },
  {
    path: 'negros-o7',
    loadChildren: () => import('./negros-o7/negros-o7.module').then( m => m.NegrosO7PageModule)
  },
  {
    path: 'negros-o8',
    loadChildren: () => import('./negros-o8/negros-o8.module').then( m => m.NegrosO8PageModule)
  },
  {
    path: 'negros-o9',
    loadChildren: () => import('./negros-o9/negros-o9.module').then( m => m.NegrosO9PageModule)
  },
  {
    path: 'region7',
    loadChildren: () => import('./region7/region7.module').then( m => m.Region7PageModule)
  },
  {
    path: 'bohol',
    loadChildren: () => import('./bohol/bohol.module').then( m => m.BoholPageModule)
  },
  {
    path: 'bohol1',
    loadChildren: () => import('./bohol1/bohol1.module').then( m => m.Bohol1PageModule)
  },
  {
    path: 'bohol2',
    loadChildren: () => import('./bohol2/bohol2.module').then( m => m.Bohol2PageModule)
  },
  {
    path: 'bohol3',
    loadChildren: () => import('./bohol3/bohol3.module').then( m => m.Bohol3PageModule)
  },
  {
    path: 'bohol4',
    loadChildren: () => import('./bohol4/bohol4.module').then( m => m.Bohol4PageModule)
  },
  {
    path: 'bohol5',
    loadChildren: () => import('./bohol5/bohol5.module').then( m => m.Bohol5PageModule)
  },
  {
    path: 'bohol6',
    loadChildren: () => import('./bohol6/bohol6.module').then( m => m.Bohol6PageModule)
  },
  {
    path: 'bohol7',
    loadChildren: () => import('./bohol7/bohol7.module').then( m => m.Bohol7PageModule)
  },
  {
    path: 'bohol8',
    loadChildren: () => import('./bohol8/bohol8.module').then( m => m.Bohol8PageModule)
  },
  {
    path: 'bohol9',
    loadChildren: () => import('./bohol9/bohol9.module').then( m => m.Bohol9PageModule)
  },
  {
    path: 'bohol10',
    loadChildren: () => import('./bohol10/bohol10.module').then( m => m.Bohol10PageModule)
  },
  {
    path: 'cebu',
    loadChildren: () => import('./cebu/cebu.module').then( m => m.CebuPageModule)
  },
  {
    path: 'cebu1',
    loadChildren: () => import('./cebu1/cebu1.module').then( m => m.Cebu1PageModule)
  },
  {
    path: 'cebu2',
    loadChildren: () => import('./cebu2/cebu2.module').then( m => m.Cebu2PageModule)
  },
  {
    path: 'cebu3',
    loadChildren: () => import('./cebu3/cebu3.module').then( m => m.Cebu3PageModule)
  },
  {
    path: 'cebu4',
    loadChildren: () => import('./cebu4/cebu4.module').then( m => m.Cebu4PageModule)
  },
  {
    path: 'cebu5',
    loadChildren: () => import('./cebu5/cebu5.module').then( m => m.Cebu5PageModule)
  },
  {
    path: 'cebu6',
    loadChildren: () => import('./cebu6/cebu6.module').then( m => m.Cebu6PageModule)
  },
  {
    path: 'cebu7',
    loadChildren: () => import('./cebu7/cebu7.module').then( m => m.Cebu7PageModule)
  },
  {
    path: 'cebu8',
    loadChildren: () => import('./cebu8/cebu8.module').then( m => m.Cebu8PageModule)
  },
  {
    path: 'cebu9',
    loadChildren: () => import('./cebu9/cebu9.module').then( m => m.Cebu9PageModule)
  },
  {
    path: 'cebu10',
    loadChildren: () => import('./cebu10/cebu10.module').then( m => m.Cebu10PageModule)
  },
  {
    path: 'negros-ov',
    loadChildren: () => import('./negros-ov/negros-ov.module').then( m => m.NegrosOvPageModule)
  },
  {
    path: 'negros-ov1',
    loadChildren: () => import('./negros-ov1/negros-ov1.module').then( m => m.NegrosOv1PageModule)
  },
  {
    path: 'negros-ov2',
    loadChildren: () => import('./negros-ov2/negros-ov2.module').then( m => m.NegrosOv2PageModule)
  },
  {
    path: 'negros-ov3',
    loadChildren: () => import('./negros-ov3/negros-ov3.module').then( m => m.NegrosOv3PageModule)
  },
  {
    path: 'negros-ov4',
    loadChildren: () => import('./negros-ov4/negros-ov4.module').then( m => m.NegrosOv4PageModule)
  },
  {
    path: 'negros-ov5',
    loadChildren: () => import('./negros-ov5/negros-ov5.module').then( m => m.NegrosOv5PageModule)
  },
  {
    path: 'negros-ov6',
    loadChildren: () => import('./negros-ov6/negros-ov6.module').then( m => m.NegrosOv6PageModule)
  },
  {
    path: 'negros-ov7',
    loadChildren: () => import('./negros-ov7/negros-ov7.module').then( m => m.NegrosOv7PageModule)
  },
  {
    path: 'negros-ov9',
    loadChildren: () => import('./negros-ov9/negros-ov9.module').then( m => m.NegrosOv9PageModule)
  },
  {
    path: 'negros-ov8',
    loadChildren: () => import('./negros-ov8/negros-ov8.module').then( m => m.NegrosOv8PageModule)
  },
  {
    path: 'negros-ov10',
    loadChildren: () => import('./negros-ov10/negros-ov10.module').then( m => m.NegrosOv10PageModule)
  },
  {
    path: 'siquirjor',
    loadChildren: () => import('./siquirjor/siquirjor.module').then( m => m.SiquirjorPageModule)
  },
  {
    path: 'siquirjor1',
    loadChildren: () => import('./siquirjor1/siquirjor1.module').then( m => m.Siquirjor1PageModule)
  },
  {
    path: 'siquirjor2',
    loadChildren: () => import('./siquirjor2/siquirjor2.module').then( m => m.Siquirjor2PageModule)
  },
  {
    path: 'siquirjor3',
    loadChildren: () => import('./siquirjor3/siquirjor3.module').then( m => m.Siquirjor3PageModule)
  },
  {
    path: 'siquirjor4',
    loadChildren: () => import('./siquirjor4/siquirjor4.module').then( m => m.Siquirjor4PageModule)
  },
  {
    path: 'siquirjor5',
    loadChildren: () => import('./siquirjor5/siquirjor5.module').then( m => m.Siquirjor5PageModule)
  },
  {
    path: 'siquirjor6',
    loadChildren: () => import('./siquirjor6/siquirjor6.module').then( m => m.Siquirjor6PageModule)
  },
  {
    path: 'biliran',
    loadChildren: () => import('./biliran/biliran.module').then( m => m.BiliranPageModule)
  },
  {
    path: 'eastern-s',
    loadChildren: () => import('./eastern-s/eastern-s.module').then( m => m.EasternSPageModule)
  },
  {
    path: 'leyte',
    loadChildren: () => import('./leyte/leyte.module').then( m => m.LeytePageModule)
  },
  {
    path: 'northern-s',
    loadChildren: () => import('./northern-s/northern-s.module').then( m => m.NorthernSPageModule)
  },
  {
    path: 'samar',
    loadChildren: () => import('./samar/samar.module').then( m => m.SamarPageModule)
  },
  {
    path: 'southern-l',
    loadChildren: () => import('./southern-l/southern-l.module').then( m => m.SouthernLPageModule)
  },
  {
    path: 'biliran1',
    loadChildren: () => import('./biliran1/biliran1.module').then( m => m.Biliran1PageModule)
  },
  {
    path: 'biliran2',
    loadChildren: () => import('./biliran2/biliran2.module').then( m => m.Biliran2PageModule)
  },
  {
    path: 'biliran3',
    loadChildren: () => import('./biliran3/biliran3.module').then( m => m.Biliran3PageModule)
  },
  {
    path: 'biliran4',
    loadChildren: () => import('./biliran4/biliran4.module').then( m => m.Biliran4PageModule)
  },
  {
    path: 'biliran5',
    loadChildren: () => import('./biliran5/biliran5.module').then( m => m.Biliran5PageModule)
  },
  {
    path: 'biliran6',
    loadChildren: () => import('./biliran6/biliran6.module').then( m => m.Biliran6PageModule)
  },
  {
    path: 'biliran7',
    loadChildren: () => import('./biliran7/biliran7.module').then( m => m.Biliran7PageModule)
  },
  {
    path: 'biliran8',
    loadChildren: () => import('./biliran8/biliran8.module').then( m => m.Biliran8PageModule)
  },
  {
    path: 'biliran9',
    loadChildren: () => import('./biliran9/biliran9.module').then( m => m.Biliran9PageModule)
  },
  {
    path: 'biliran10',
    loadChildren: () => import('./biliran10/biliran10.module').then( m => m.Biliran10PageModule)
  },
  {
    path: 'eastern-s1',
    loadChildren: () => import('./eastern-s1/eastern-s1.module').then( m => m.EasternS1PageModule)
  },
  {
    path: 'eastern-s2',
    loadChildren: () => import('./eastern-s2/eastern-s2.module').then( m => m.EasternS2PageModule)
  },
  {
    path: 'eastern-s3',
    loadChildren: () => import('./eastern-s3/eastern-s3.module').then( m => m.EasternS3PageModule)
  },
  {
    path: 'eastern-s5',
    loadChildren: () => import('./eastern-s5/eastern-s5.module').then( m => m.EasternS5PageModule)
  },
  {
    path: 'eastern-s4',
    loadChildren: () => import('./eastern-s4/eastern-s4.module').then( m => m.EasternS4PageModule)
  },
  {
    path: 'eastern-s6',
    loadChildren: () => import('./eastern-s6/eastern-s6.module').then( m => m.EasternS6PageModule)
  },
  {
    path: 'eastern-s7',
    loadChildren: () => import('./eastern-s7/eastern-s7.module').then( m => m.EasternS7PageModule)
  },
  {
    path: 'eastern-s8',
    loadChildren: () => import('./eastern-s8/eastern-s8.module').then( m => m.EasternS8PageModule)
  },
  {
    path: 'eastern-s9',
    loadChildren: () => import('./eastern-s9/eastern-s9.module').then( m => m.EasternS9PageModule)
  },
  {
    path: 'eastern-s10',
    loadChildren: () => import('./eastern-s10/eastern-s10.module').then( m => m.EasternS10PageModule)
  },
  {
    path: 'leyte1',
    loadChildren: () => import('./leyte1/leyte1.module').then( m => m.Leyte1PageModule)
  },
  {
    path: 'leyte2',
    loadChildren: () => import('./leyte2/leyte2.module').then( m => m.Leyte2PageModule)
  },
  {
    path: 'leyte3',
    loadChildren: () => import('./leyte3/leyte3.module').then( m => m.Leyte3PageModule)
  },
  {
    path: 'leyte4',
    loadChildren: () => import('./leyte4/leyte4.module').then( m => m.Leyte4PageModule)
  },
  {
    path: 'leyte5',
    loadChildren: () => import('./leyte5/leyte5.module').then( m => m.Leyte5PageModule)
  },
  {
    path: 'leyte6',
    loadChildren: () => import('./leyte6/leyte6.module').then( m => m.Leyte6PageModule)
  },
  {
    path: 'leyte7',
    loadChildren: () => import('./leyte7/leyte7.module').then( m => m.Leyte7PageModule)
  },
  {
    path: 'leyte8',
    loadChildren: () => import('./leyte8/leyte8.module').then( m => m.Leyte8PageModule)
  },
  {
    path: 'leyte9',
    loadChildren: () => import('./leyte9/leyte9.module').then( m => m.Leyte9PageModule)
  },
  {
    path: 'leyte10',
    loadChildren: () => import('./leyte10/leyte10.module').then( m => m.Leyte10PageModule)
  },
  {
    path: 'northern-s1',
    loadChildren: () => import('./northern-s1/northern-s1.module').then( m => m.NorthernS1PageModule)
  },
  {
    path: 'northern-s2',
    loadChildren: () => import('./northern-s2/northern-s2.module').then( m => m.NorthernS2PageModule)
  },
  {
    path: 'northern-s3',
    loadChildren: () => import('./northern-s3/northern-s3.module').then( m => m.NorthernS3PageModule)
  },
  {
    path: 'northern-s4',
    loadChildren: () => import('./northern-s4/northern-s4.module').then( m => m.NorthernS4PageModule)
  },
  {
    path: 'northern-s6',
    loadChildren: () => import('./northern-s6/northern-s6.module').then( m => m.NorthernS6PageModule)
  },
  {
    path: 'northern-s5',
    loadChildren: () => import('./northern-s5/northern-s5.module').then( m => m.NorthernS5PageModule)
  },
  {
    path: 'northern-s7',
    loadChildren: () => import('./northern-s7/northern-s7.module').then( m => m.NorthernS7PageModule)
  },
  {
    path: 'northern-s8',
    loadChildren: () => import('./northern-s8/northern-s8.module').then( m => m.NorthernS8PageModule)
  },
  {
    path: 'northern-s9',
    loadChildren: () => import('./northern-s9/northern-s9.module').then( m => m.NorthernS9PageModule)
  },
  {
    path: 'northern-s10',
    loadChildren: () => import('./northern-s10/northern-s10.module').then( m => m.NorthernS10PageModule)
  },
  {
    path: 'southern-l1',
    loadChildren: () => import('./southern-l1/southern-l1.module').then( m => m.SouthernL1PageModule)
  },
  {
    path: 'southern-l2',
    loadChildren: () => import('./southern-l2/southern-l2.module').then( m => m.SouthernL2PageModule)
  },
  {
    path: 'southern-l3',
    loadChildren: () => import('./southern-l3/southern-l3.module').then( m => m.SouthernL3PageModule)
  },
  {
    path: 'southern-l4',
    loadChildren: () => import('./southern-l4/southern-l4.module').then( m => m.SouthernL4PageModule)
  },
  {
    path: 'southern-l5',
    loadChildren: () => import('./southern-l5/southern-l5.module').then( m => m.SouthernL5PageModule)
  },
  {
    path: 'southern-l6',
    loadChildren: () => import('./southern-l6/southern-l6.module').then( m => m.SouthernL6PageModule)
  },
  {
    path: 'southern-l7',
    loadChildren: () => import('./southern-l7/southern-l7.module').then( m => m.SouthernL7PageModule)
  },
  {
    path: 'southern-l8',
    loadChildren: () => import('./southern-l8/southern-l8.module').then( m => m.SouthernL8PageModule)
  },
  {
    path: 'southern-l9',
    loadChildren: () => import('./southern-l9/southern-l9.module').then( m => m.SouthernL9PageModule)
  },
  {
    path: 'southern-l10',
    loadChildren: () => import('./southern-l10/southern-l10.module').then( m => m.SouthernL10PageModule)
  },
  {
    path: 'region8',
    loadChildren: () => import('./region8/region8.module').then( m => m.Region8PageModule)
  },
  {
    path: 'region9',
    loadChildren: () => import('./region9/region9.module').then( m => m.Region9PageModule)
  },
  {
    path: 'zamboanga-delnorte',
    loadChildren: () => import('./zamboanga-delnorte/zamboanga-delnorte.module').then( m => m.ZamboangaDelnortePageModule)
  },
  {
    path: 'zamboanga-delnorte1',
    loadChildren: () => import('./zamboanga-delnorte1/zamboanga-delnorte1.module').then( m => m.ZamboangaDelnorte1PageModule)
  },
  {
    path: 'zamboanga-delnorte2',
    loadChildren: () => import('./zamboanga-delnorte2/zamboanga-delnorte2.module').then( m => m.ZamboangaDelnorte2PageModule)
  },
  {
    path: 'zamboanga-delnorte3',
    loadChildren: () => import('./zamboanga-delnorte3/zamboanga-delnorte3.module').then( m => m.ZamboangaDelnorte3PageModule)
  },
  {
    path: 'zamboanga-delnorte4',
    loadChildren: () => import('./zamboanga-delnorte4/zamboanga-delnorte4.module').then( m => m.ZamboangaDelnorte4PageModule)
  },
  {
    path: 'zamboanga-delnorte5',
    loadChildren: () => import('./zamboanga-delnorte5/zamboanga-delnorte5.module').then( m => m.ZamboangaDelnorte5PageModule)
  },
  {
    path: 'zamboanga-delnorte6',
    loadChildren: () => import('./zamboanga-delnorte6/zamboanga-delnorte6.module').then( m => m.ZamboangaDelnorte6PageModule)
  },
  {
    path: 'zamboanga-delnorte7',
    loadChildren: () => import('./zamboanga-delnorte7/zamboanga-delnorte7.module').then( m => m.ZamboangaDelnorte7PageModule)
  },
  {
    path: 'zamboanga-delnorte8',
    loadChildren: () => import('./zamboanga-delnorte8/zamboanga-delnorte8.module').then( m => m.ZamboangaDelnorte8PageModule)
  },
  {
    path: 'zamboanga-delnorte9',
    loadChildren: () => import('./zamboanga-delnorte9/zamboanga-delnorte9.module').then( m => m.ZamboangaDelnorte9PageModule)
  },
  {
    path: 'zamboanga-delnorte10',
    loadChildren: () => import('./zamboanga-delnorte10/zamboanga-delnorte10.module').then( m => m.ZamboangaDelnorte10PageModule)
  },
  {
    path: 'zamboanga-delsur',
    loadChildren: () => import('./zamboanga-delsur/zamboanga-delsur.module').then( m => m.ZamboangaDelsurPageModule)
  },
  {
    path: 'zamboanga-delsur1',
    loadChildren: () => import('./zamboanga-delsur1/zamboanga-delsur1.module').then( m => m.ZamboangaDelsur1PageModule)
  },
  {
    path: 'zamboanga-delsur2',
    loadChildren: () => import('./zamboanga-delsur2/zamboanga-delsur2.module').then( m => m.ZamboangaDelsur2PageModule)
  },
  {
    path: 'zamboanga-delsur3',
    loadChildren: () => import('./zamboanga-delsur3/zamboanga-delsur3.module').then( m => m.ZamboangaDelsur3PageModule)
  },
  {
    path: 'zamboanga-delsur4',
    loadChildren: () => import('./zamboanga-delsur4/zamboanga-delsur4.module').then( m => m.ZamboangaDelsur4PageModule)
  },
  {
    path: 'zamboanga-delsur5',
    loadChildren: () => import('./zamboanga-delsur5/zamboanga-delsur5.module').then( m => m.ZamboangaDelsur5PageModule)
  },
  {
    path: 'zamboanga-delsur6',
    loadChildren: () => import('./zamboanga-delsur6/zamboanga-delsur6.module').then( m => m.ZamboangaDelsur6PageModule)
  },
  {
    path: 'zamboanga-delsur7',
    loadChildren: () => import('./zamboanga-delsur7/zamboanga-delsur7.module').then( m => m.ZamboangaDelsur7PageModule)
  },
  {
    path: 'zamboanga-delsur8',
    loadChildren: () => import('./zamboanga-delsur8/zamboanga-delsur8.module').then( m => m.ZamboangaDelsur8PageModule)
  },
  {
    path: 'zamboanga-delsur9',
    loadChildren: () => import('./zamboanga-delsur9/zamboanga-delsur9.module').then( m => m.ZamboangaDelsur9PageModule)
  },
  {
    path: 'zamboanga-delsur10',
    loadChildren: () => import('./zamboanga-delsur10/zamboanga-delsur10.module').then( m => m.ZamboangaDelsur10PageModule)
  },
  {
    path: 'zamboanga-s',
    loadChildren: () => import('./zamboanga-s/zamboanga-s.module').then( m => m.ZamboangaSPageModule)
  },
  {
    path: 'zamboanga-s1',
    loadChildren: () => import('./zamboanga-s1/zamboanga-s1.module').then( m => m.ZamboangaS1PageModule)
  },
  {
    path: 'zamboanga-s2',
    loadChildren: () => import('./zamboanga-s2/zamboanga-s2.module').then( m => m.ZamboangaS2PageModule)
  },
  {
    path: 'zamboanga-s3',
    loadChildren: () => import('./zamboanga-s3/zamboanga-s3.module').then( m => m.ZamboangaS3PageModule)
  },
  {
    path: 'zamboanga-s4',
    loadChildren: () => import('./zamboanga-s4/zamboanga-s4.module').then( m => m.ZamboangaS4PageModule)
  },
  {
    path: 'zamboanga-s5',
    loadChildren: () => import('./zamboanga-s5/zamboanga-s5.module').then( m => m.ZamboangaS5PageModule)
  },
  {
    path: 'zamboanga-s6',
    loadChildren: () => import('./zamboanga-s6/zamboanga-s6.module').then( m => m.ZamboangaS6PageModule)
  },
  {
    path: 'zamboanga-s7',
    loadChildren: () => import('./zamboanga-s7/zamboanga-s7.module').then( m => m.ZamboangaS7PageModule)
  },
  {
    path: 'zamboanga-s8',
    loadChildren: () => import('./zamboanga-s8/zamboanga-s8.module').then( m => m.ZamboangaS8PageModule)
  },
  {
    path: 'zamboanga-s9',
    loadChildren: () => import('./zamboanga-s9/zamboanga-s9.module').then( m => m.ZamboangaS9PageModule)
  },
  {
    path: 'zamboanga-s10',
    loadChildren: () => import('./zamboanga-s10/zamboanga-s10.module').then( m => m.ZamboangaS10PageModule)
  },
  {
    path: 'bukidnon',
    loadChildren: () => import('./bukidnon/bukidnon.module').then( m => m.BukidnonPageModule)
  },
  {
    path: 'bukidnon1',
    loadChildren: () => import('./bukidnon1/bukidnon1.module').then( m => m.Bukidnon1PageModule)
  },
  {
    path: 'bukidnon2',
    loadChildren: () => import('./bukidnon2/bukidnon2.module').then( m => m.Bukidnon2PageModule)
  },
  {
    path: 'bukidnon3',
    loadChildren: () => import('./bukidnon3/bukidnon3.module').then( m => m.Bukidnon3PageModule)
  },
  {
    path: 'bukidnon4',
    loadChildren: () => import('./bukidnon4/bukidnon4.module').then( m => m.Bukidnon4PageModule)
  },
  {
    path: 'bukidnon5',
    loadChildren: () => import('./bukidnon5/bukidnon5.module').then( m => m.Bukidnon5PageModule)
  },
  {
    path: 'bukidnon6',
    loadChildren: () => import('./bukidnon6/bukidnon6.module').then( m => m.Bukidnon6PageModule)
  },
  {
    path: 'bukidnon7',
    loadChildren: () => import('./bukidnon7/bukidnon7.module').then( m => m.Bukidnon7PageModule)
  },
  {
    path: 'bukidnon8',
    loadChildren: () => import('./bukidnon8/bukidnon8.module').then( m => m.Bukidnon8PageModule)
  },
  {
    path: 'bukidnon9',
    loadChildren: () => import('./bukidnon9/bukidnon9.module').then( m => m.Bukidnon9PageModule)
  },
  {
    path: 'bukidnon10',
    loadChildren: () => import('./bukidnon10/bukidnon10.module').then( m => m.Bukidnon10PageModule)
  },
  {
    path: 'region10',
    loadChildren: () => import('./region10/region10.module').then( m => m.Region10PageModule)
  },
  {
    path: 'camiguin',
    loadChildren: () => import('./camiguin/camiguin.module').then( m => m.CamiguinPageModule)
  },
  {
    path: 'camiguin1',
    loadChildren: () => import('./camiguin1/camiguin1.module').then( m => m.Camiguin1PageModule)
  },
  {
    path: 'camiguin2',
    loadChildren: () => import('./camiguin2/camiguin2.module').then( m => m.Camiguin2PageModule)
  },
  {
    path: 'camiguin3',
    loadChildren: () => import('./camiguin3/camiguin3.module').then( m => m.Camiguin3PageModule)
  },
  {
    path: 'camiguin4',
    loadChildren: () => import('./camiguin4/camiguin4.module').then( m => m.Camiguin4PageModule)
  },
  {
    path: 'camiguin5',
    loadChildren: () => import('./camiguin5/camiguin5.module').then( m => m.Camiguin5PageModule)
  },
  {
    path: 'camiguin6',
    loadChildren: () => import('./camiguin6/camiguin6.module').then( m => m.Camiguin6PageModule)
  },
  {
    path: 'camiguin7',
    loadChildren: () => import('./camiguin7/camiguin7.module').then( m => m.Camiguin7PageModule)
  },
  {
    path: 'camiguin8',
    loadChildren: () => import('./camiguin8/camiguin8.module').then( m => m.Camiguin8PageModule)
  },
  {
    path: 'camiguin9',
    loadChildren: () => import('./camiguin9/camiguin9.module').then( m => m.Camiguin9PageModule)
  },
  {
    path: 'camiguin10',
    loadChildren: () => import('./camiguin10/camiguin10.module').then( m => m.Camiguin10PageModule)
  },
  {
    path: 'lanao-delnorte',
    loadChildren: () => import('./lanao-delnorte/lanao-delnorte.module').then( m => m.LanaoDelnortePageModule)
  },
  {
    path: 'lanao-delnorte1',
    loadChildren: () => import('./lanao-delnorte1/lanao-delnorte1.module').then( m => m.LanaoDelnorte1PageModule)
  },
  {
    path: 'lanao-delnorte2',
    loadChildren: () => import('./lanao-delnorte2/lanao-delnorte2.module').then( m => m.LanaoDelnorte2PageModule)
  },
  {
    path: 'lanao-delnorte3',
    loadChildren: () => import('./lanao-delnorte3/lanao-delnorte3.module').then( m => m.LanaoDelnorte3PageModule)
  },
  {
    path: 'lanao-delnorte4',
    loadChildren: () => import('./lanao-delnorte4/lanao-delnorte4.module').then( m => m.LanaoDelnorte4PageModule)
  },
  {
    path: 'lanao-delnorte5',
    loadChildren: () => import('./lanao-delnorte5/lanao-delnorte5.module').then( m => m.LanaoDelnorte5PageModule)
  },
  {
    path: 'lanao-delnorte6',
    loadChildren: () => import('./lanao-delnorte6/lanao-delnorte6.module').then( m => m.LanaoDelnorte6PageModule)
  },
  {
    path: 'lanao-delnorte7',
    loadChildren: () => import('./lanao-delnorte7/lanao-delnorte7.module').then( m => m.LanaoDelnorte7PageModule)
  },
  {
    path: 'lanao-delnorte8',
    loadChildren: () => import('./lanao-delnorte8/lanao-delnorte8.module').then( m => m.LanaoDelnorte8PageModule)
  },
  {
    path: 'lanao-delnorte9',
    loadChildren: () => import('./lanao-delnorte9/lanao-delnorte9.module').then( m => m.LanaoDelnorte9PageModule)
  },
  {
    path: 'lanao-delnorte10',
    loadChildren: () => import('./lanao-delnorte10/lanao-delnorte10.module').then( m => m.LanaoDelnorte10PageModule)
  },
  {
    path: 'misamis-occidental',
    loadChildren: () => import('./misamis-occidental/misamis-occidental.module').then( m => m.MisamisOccidentalPageModule)
  },
  {
    path: 'misamis-occidental1',
    loadChildren: () => import('./misamis-occidental1/misamis-occidental1.module').then( m => m.MisamisOccidental1PageModule)
  },
  {
    path: 'misamis-occidental2',
    loadChildren: () => import('./misamis-occidental2/misamis-occidental2.module').then( m => m.MisamisOccidental2PageModule)
  },
  {
    path: 'misamis-occidental3',
    loadChildren: () => import('./misamis-occidental3/misamis-occidental3.module').then( m => m.MisamisOccidental3PageModule)
  },
  {
    path: 'misamis-occidental4',
    loadChildren: () => import('./misamis-occidental4/misamis-occidental4.module').then( m => m.MisamisOccidental4PageModule)
  },
  {
    path: 'misamis-occidental5',
    loadChildren: () => import('./misamis-occidental5/misamis-occidental5.module').then( m => m.MisamisOccidental5PageModule)
  },
  {
    path: 'misamis-occidental6',
    loadChildren: () => import('./misamis-occidental6/misamis-occidental6.module').then( m => m.MisamisOccidental6PageModule)
  },
  {
    path: 'misamis-occidental7',
    loadChildren: () => import('./misamis-occidental7/misamis-occidental7.module').then( m => m.MisamisOccidental7PageModule)
  },
  {
    path: 'misamis-occidental8',
    loadChildren: () => import('./misamis-occidental8/misamis-occidental8.module').then( m => m.MisamisOccidental8PageModule)
  },
  {
    path: 'misamis-occidental9',
    loadChildren: () => import('./misamis-occidental9/misamis-occidental9.module').then( m => m.MisamisOccidental9PageModule)
  },
  {
    path: 'misamis-occidental10',
    loadChildren: () => import('./misamis-occidental10/misamis-occidental10.module').then( m => m.MisamisOccidental10PageModule)
  },
  {
    path: 'misamis-oriental',
    loadChildren: () => import('./misamis-oriental/misamis-oriental.module').then( m => m.MisamisOrientalPageModule)
  },
  {
    path: 'misamis-oriental1',
    loadChildren: () => import('./misamis-oriental1/misamis-oriental1.module').then( m => m.MisamisOriental1PageModule)
  },
  {
    path: 'misamis-oriental2',
    loadChildren: () => import('./misamis-oriental2/misamis-oriental2.module').then( m => m.MisamisOriental2PageModule)
  },
  {
    path: 'misamis-oriental3',
    loadChildren: () => import('./misamis-oriental3/misamis-oriental3.module').then( m => m.MisamisOriental3PageModule)
  },
  {
    path: 'misamis-oriental4',
    loadChildren: () => import('./misamis-oriental4/misamis-oriental4.module').then( m => m.MisamisOriental4PageModule)
  },
  {
    path: 'misamis-oriental5',
    loadChildren: () => import('./misamis-oriental5/misamis-oriental5.module').then( m => m.MisamisOriental5PageModule)
  },
  {
    path: 'misamis-oriental6',
    loadChildren: () => import('./misamis-oriental6/misamis-oriental6.module').then( m => m.MisamisOriental6PageModule)
  },
  {
    path: 'misamis-oriental7',
    loadChildren: () => import('./misamis-oriental7/misamis-oriental7.module').then( m => m.MisamisOriental7PageModule)
  },
  {
    path: 'misamis-oriental8',
    loadChildren: () => import('./misamis-oriental8/misamis-oriental8.module').then( m => m.MisamisOriental8PageModule)
  },
  {
    path: 'misamis-oriental9',
    loadChildren: () => import('./misamis-oriental9/misamis-oriental9.module').then( m => m.MisamisOriental9PageModule)
  },
  {
    path: 'misamis-oriental10',
    loadChildren: () => import('./misamis-oriental10/misamis-oriental10.module').then( m => m.MisamisOriental10PageModule)
  },
  {
    path: 'region11',
    loadChildren: () => import('./region11/region11.module').then( m => m.Region11PageModule)
  },
  {
    path: 'davao-delnorte',
    loadChildren: () => import('./davao-delnorte/davao-delnorte.module').then( m => m.DavaoDelnortePageModule)
  },
  {
    path: 'davao-delnorte1',
    loadChildren: () => import('./davao-delnorte1/davao-delnorte1.module').then( m => m.DavaoDelnorte1PageModule)
  },
  {
    path: 'davao-delnorte2',
    loadChildren: () => import('./davao-delnorte2/davao-delnorte2.module').then( m => m.DavaoDelnorte2PageModule)
  },
  {
    path: 'davao-delnorte3',
    loadChildren: () => import('./davao-delnorte3/davao-delnorte3.module').then( m => m.DavaoDelnorte3PageModule)
  },
  {
    path: 'davao-delnorte4',
    loadChildren: () => import('./davao-delnorte4/davao-delnorte4.module').then( m => m.DavaoDelnorte4PageModule)
  },
  {
    path: 'davao-delsur',
    loadChildren: () => import('./davao-delsur/davao-delsur.module').then( m => m.DavaoDelsurPageModule)
  },
  {
    path: 'davao-delsur1',
    loadChildren: () => import('./davao-delsur1/davao-delsur1.module').then( m => m.DavaoDelsur1PageModule)
  },
  {
    path: 'davao-delsur2',
    loadChildren: () => import('./davao-delsur2/davao-delsur2.module').then( m => m.DavaoDelsur2PageModule)
  },
  {
    path: 'davao-delsur3',
    loadChildren: () => import('./davao-delsur3/davao-delsur3.module').then( m => m.DavaoDelsur3PageModule)
  },
  {
    path: 'davao-delsur4',
    loadChildren: () => import('./davao-delsur4/davao-delsur4.module').then( m => m.DavaoDelsur4PageModule)
  },
  {
    path: 'davao-delsur5',
    loadChildren: () => import('./davao-delsur5/davao-delsur5.module').then( m => m.DavaoDelsur5PageModule)
  },
  {
    path: 'davao-delsur6',
    loadChildren: () => import('./davao-delsur6/davao-delsur6.module').then( m => m.DavaoDelsur6PageModule)
  },
  {
    path: 'davao-delsur7',
    loadChildren: () => import('./davao-delsur7/davao-delsur7.module').then( m => m.DavaoDelsur7PageModule)
  },
  {
    path: 'davao-delsur8',
    loadChildren: () => import('./davao-delsur8/davao-delsur8.module').then( m => m.DavaoDelsur8PageModule)
  },
  {
    path: 'davao-delsur9',
    loadChildren: () => import('./davao-delsur9/davao-delsur9.module').then( m => m.DavaoDelsur9PageModule)
  },
  {
    path: 'davao-occidental',
    loadChildren: () => import('./davao-occidental/davao-occidental.module').then( m => m.DavaoOccidentalPageModule)
  },
  {
    path: 'davao-occidental1',
    loadChildren: () => import('./davao-occidental1/davao-occidental1.module').then( m => m.DavaoOccidental1PageModule)
  },
  {
    path: 'davao-occidental2',
    loadChildren: () => import('./davao-occidental2/davao-occidental2.module').then( m => m.DavaoOccidental2PageModule)
  },
  {
    path: 'davao-occidental3',
    loadChildren: () => import('./davao-occidental3/davao-occidental3.module').then( m => m.DavaoOccidental3PageModule)
  },
  {
    path: 'davao-occidental4',
    loadChildren: () => import('./davao-occidental4/davao-occidental4.module').then( m => m.DavaoOccidental4PageModule)
  },
  {
    path: 'davao-occidental5',
    loadChildren: () => import('./davao-occidental5/davao-occidental5.module').then( m => m.DavaoOccidental5PageModule)
  },
  {
    path: 'davao-occidental6',
    loadChildren: () => import('./davao-occidental6/davao-occidental6.module').then( m => m.DavaoOccidental6PageModule)
  },
  {
    path: 'davao-occidental7',
    loadChildren: () => import('./davao-occidental7/davao-occidental7.module').then( m => m.DavaoOccidental7PageModule)
  },
  {
    path: 'davao-occidental8',
    loadChildren: () => import('./davao-occidental8/davao-occidental8.module').then( m => m.DavaoOccidental8PageModule)
  },
  {
    path: 'davao-occidental9',
    loadChildren: () => import('./davao-occidental9/davao-occidental9.module').then( m => m.DavaoOccidental9PageModule)
  },
  {
    path: 'davao-occidental10',
    loadChildren: () => import('./davao-occidental10/davao-occidental10.module').then( m => m.DavaoOccidental10PageModule)
  },
  {
    path: 'davao-oriental',
    loadChildren: () => import('./davao-oriental/davao-oriental.module').then( m => m.DavaoOrientalPageModule)
  },
  {
    path: 'davao-oriental1',
    loadChildren: () => import('./davao-oriental1/davao-oriental1.module').then( m => m.DavaoOriental1PageModule)
  },
  {
    path: 'davao-oriental2',
    loadChildren: () => import('./davao-oriental2/davao-oriental2.module').then( m => m.DavaoOriental2PageModule)
  },
  {
    path: 'davao-oriental3',
    loadChildren: () => import('./davao-oriental3/davao-oriental3.module').then( m => m.DavaoOriental3PageModule)
  },
  {
    path: 'davao-oriental4',
    loadChildren: () => import('./davao-oriental4/davao-oriental4.module').then( m => m.DavaoOriental4PageModule)
  },
  {
    path: 'davao-oriental5',
    loadChildren: () => import('./davao-oriental5/davao-oriental5.module').then( m => m.DavaoOriental5PageModule)
  },
  {
    path: 'davao-oriental6',
    loadChildren: () => import('./davao-oriental6/davao-oriental6.module').then( m => m.DavaoOriental6PageModule)
  },
  {
    path: 'davao-oriental7',
    loadChildren: () => import('./davao-oriental7/davao-oriental7.module').then( m => m.DavaoOriental7PageModule)
  },
  {
    path: 'davao-oriental9',
    loadChildren: () => import('./davao-oriental9/davao-oriental9.module').then( m => m.DavaoOriental9PageModule)
  },
  {
    path: 'davao-oriental10',
    loadChildren: () => import('./davao-oriental10/davao-oriental10.module').then( m => m.DavaoOriental10PageModule)
  },
  {
    path: 'davao-oriental8',
    loadChildren: () => import('./davao-oriental8/davao-oriental8.module').then( m => m.DavaoOriental8PageModule)
  },
  {
    path: 'region12',
    loadChildren: () => import('./region12/region12.module').then( m => m.Region12PageModule)
  },
  {
    path: 'n-cotabato',
    loadChildren: () => import('./n-cotabato/n-cotabato.module').then( m => m.NCotabatoPageModule)
  },
  {
    path: 'n-cotabato1',
    loadChildren: () => import('./n-cotabato1/n-cotabato1.module').then( m => m.NCotabato1PageModule)
  },
  {
    path: 'n-cotabato2',
    loadChildren: () => import('./n-cotabato2/n-cotabato2.module').then( m => m.NCotabato2PageModule)
  },
  {
    path: 'n-cotabato3',
    loadChildren: () => import('./n-cotabato3/n-cotabato3.module').then( m => m.NCotabato3PageModule)
  },
  {
    path: 'n-cotabato4',
    loadChildren: () => import('./n-cotabato4/n-cotabato4.module').then( m => m.NCotabato4PageModule)
  },
  {
    path: 'n-cotabato5',
    loadChildren: () => import('./n-cotabato5/n-cotabato5.module').then( m => m.NCotabato5PageModule)
  },
  {
    path: 'n-cotabato6',
    loadChildren: () => import('./n-cotabato6/n-cotabato6.module').then( m => m.NCotabato6PageModule)
  },
  {
    path: 'n-cotabato7',
    loadChildren: () => import('./n-cotabato7/n-cotabato7.module').then( m => m.NCotabato7PageModule)
  },
  {
    path: 'n-cotabato8',
    loadChildren: () => import('./n-cotabato8/n-cotabato8.module').then( m => m.NCotabato8PageModule)
  },
  {
    path: 'n-cotabato9',
    loadChildren: () => import('./n-cotabato9/n-cotabato9.module').then( m => m.NCotabato9PageModule)
  },
  {
    path: 'n-cotabato10',
    loadChildren: () => import('./n-cotabato10/n-cotabato10.module').then( m => m.NCotabato10PageModule)
  },
  {
    path: 'sarangani',
    loadChildren: () => import('./sarangani/sarangani.module').then( m => m.SaranganiPageModule)
  },
  {
    path: 'sarangani1',
    loadChildren: () => import('./sarangani1/sarangani1.module').then( m => m.Sarangani1PageModule)
  },
  {
    path: 'sarangani2',
    loadChildren: () => import('./sarangani2/sarangani2.module').then( m => m.Sarangani2PageModule)
  },
  {
    path: 'sarangani3',
    loadChildren: () => import('./sarangani3/sarangani3.module').then( m => m.Sarangani3PageModule)
  },
  {
    path: 'sarangani4',
    loadChildren: () => import('./sarangani4/sarangani4.module').then( m => m.Sarangani4PageModule)
  },
  {
    path: 'sarangani5',
    loadChildren: () => import('./sarangani5/sarangani5.module').then( m => m.Sarangani5PageModule)
  },
  {
    path: 'sarangani6',
    loadChildren: () => import('./sarangani6/sarangani6.module').then( m => m.Sarangani6PageModule)
  },
  {
    path: 'sarangani7',
    loadChildren: () => import('./sarangani7/sarangani7.module').then( m => m.Sarangani7PageModule)
  },
  {
    path: 'sarangani8',
    loadChildren: () => import('./sarangani8/sarangani8.module').then( m => m.Sarangani8PageModule)
  },
  {
    path: 'sarangani9',
    loadChildren: () => import('./sarangani9/sarangani9.module').then( m => m.Sarangani9PageModule)
  },
  {
    path: 'sarangani10',
    loadChildren: () => import('./sarangani10/sarangani10.module').then( m => m.Sarangani10PageModule)
  },
  {
    path: 's-cotabato',
    loadChildren: () => import('./s-cotabato/s-cotabato.module').then( m => m.SCotabatoPageModule)
  },
  {
    path: 's-cotabato1',
    loadChildren: () => import('./s-cotabato1/s-cotabato1.module').then( m => m.SCotabato1PageModule)
  },
  {
    path: 's-cotabato2',
    loadChildren: () => import('./s-cotabato2/s-cotabato2.module').then( m => m.SCotabato2PageModule)
  },
  {
    path: 's-cotabato3',
    loadChildren: () => import('./s-cotabato3/s-cotabato3.module').then( m => m.SCotabato3PageModule)
  },
  {
    path: 's-cotabato4',
    loadChildren: () => import('./s-cotabato4/s-cotabato4.module').then( m => m.SCotabato4PageModule)
  },
  {
    path: 's-cotabato5',
    loadChildren: () => import('./s-cotabato5/s-cotabato5.module').then( m => m.SCotabato5PageModule)
  },
  {
    path: 's-cotabato6',
    loadChildren: () => import('./s-cotabato6/s-cotabato6.module').then( m => m.SCotabato6PageModule)
  },
  {
    path: 's-cotabato7',
    loadChildren: () => import('./s-cotabato7/s-cotabato7.module').then( m => m.SCotabato7PageModule)
  },
  {
    path: 's-cotabato8',
    loadChildren: () => import('./s-cotabato8/s-cotabato8.module').then( m => m.SCotabato8PageModule)
  },
  {
    path: 's-cotabato9',
    loadChildren: () => import('./s-cotabato9/s-cotabato9.module').then( m => m.SCotabato9PageModule)
  },
  {
    path: 's-cotabato10',
    loadChildren: () => import('./s-cotabato10/s-cotabato10.module').then( m => m.SCotabato10PageModule)
  },
  {
    path: 'sultan-kudarat',
    loadChildren: () => import('./sultan-kudarat/sultan-kudarat.module').then( m => m.SultanKudaratPageModule)
  },
  {
    path: 'sultan-kudarat1',
    loadChildren: () => import('./sultan-kudarat1/sultan-kudarat1.module').then( m => m.SultanKudarat1PageModule)
  },
  {
    path: 'sultan-kudarat2',
    loadChildren: () => import('./sultan-kudarat2/sultan-kudarat2.module').then( m => m.SultanKudarat2PageModule)
  },
  {
    path: 'sultan-kudarat3',
    loadChildren: () => import('./sultan-kudarat3/sultan-kudarat3.module').then( m => m.SultanKudarat3PageModule)
  },
  {
    path: 'sultan-kudarat4',
    loadChildren: () => import('./sultan-kudarat4/sultan-kudarat4.module').then( m => m.SultanKudarat4PageModule)
  },
  {
    path: 'sultan-kudarat5',
    loadChildren: () => import('./sultan-kudarat5/sultan-kudarat5.module').then( m => m.SultanKudarat5PageModule)
  },
  {
    path: 'sultan-kudarat6',
    loadChildren: () => import('./sultan-kudarat6/sultan-kudarat6.module').then( m => m.SultanKudarat6PageModule)
  },
  {
    path: 'sultan-kudarat7',
    loadChildren: () => import('./sultan-kudarat7/sultan-kudarat7.module').then( m => m.SultanKudarat7PageModule)
  },
  {
    path: 'sultan-kudarat8',
    loadChildren: () => import('./sultan-kudarat8/sultan-kudarat8.module').then( m => m.SultanKudarat8PageModule)
  },
  {
    path: 'sultan-kudarat9',
    loadChildren: () => import('./sultan-kudarat9/sultan-kudarat9.module').then( m => m.SultanKudarat9PageModule)
  },
  {
    path: 'sultan-kudarat10',
    loadChildren: () => import('./sultan-kudarat10/sultan-kudarat10.module').then( m => m.SultanKudarat10PageModule)
  },
  {
    path: 'region13',
    loadChildren: () => import('./region13/region13.module').then( m => m.Region13PageModule)
  },
  {
    path: 'agusan-delnorte',
    loadChildren: () => import('./agusan-delnorte/agusan-delnorte.module').then( m => m.AgusanDelnortePageModule)
  },
  {
    path: 'agusan-delnorte1',
    loadChildren: () => import('./agusan-delnorte1/agusan-delnorte1.module').then( m => m.AgusanDelnorte1PageModule)
  },
  {
    path: 'agusan-delsur',
    loadChildren: () => import('./agusan-delsur/agusan-delsur.module').then( m => m.AgusanDelsurPageModule)
  },
  {
    path: 'agusan-delsur1',
    loadChildren: () => import('./agusan-delsur1/agusan-delsur1.module').then( m => m.AgusanDelsur1PageModule)
  },
  {
    path: 'agusan-delsur2',
    loadChildren: () => import('./agusan-delsur2/agusan-delsur2.module').then( m => m.AgusanDelsur2PageModule)
  },
  {
    path: 'agusan-delsur3',
    loadChildren: () => import('./agusan-delsur3/agusan-delsur3.module').then( m => m.AgusanDelsur3PageModule)
  },
  {
    path: 'agusan-delsur4',
    loadChildren: () => import('./agusan-delsur4/agusan-delsur4.module').then( m => m.AgusanDelsur4PageModule)
  },
  {
    path: 'agusan-delsur5',
    loadChildren: () => import('./agusan-delsur5/agusan-delsur5.module').then( m => m.AgusanDelsur5PageModule)
  },
  {
    path: 'agusan-delsur6',
    loadChildren: () => import('./agusan-delsur6/agusan-delsur6.module').then( m => m.AgusanDelsur6PageModule)
  },
  {
    path: 'agusan-delsur7',
    loadChildren: () => import('./agusan-delsur7/agusan-delsur7.module').then( m => m.AgusanDelsur7PageModule)
  },
  {
    path: 'agusan-delsur8',
    loadChildren: () => import('./agusan-delsur8/agusan-delsur8.module').then( m => m.AgusanDelsur8PageModule)
  },
  {
    path: 'agusan-delsur9',
    loadChildren: () => import('./agusan-delsur9/agusan-delsur9.module').then( m => m.AgusanDelsur9PageModule)
  },
  {
    path: 'agusan-delsur10',
    loadChildren: () => import('./agusan-delsur10/agusan-delsur10.module').then( m => m.AgusanDelsur10PageModule)
  },
  {
    path: 'dinagat-islands',
    loadChildren: () => import('./dinagat-islands/dinagat-islands.module').then( m => m.DinagatIslandsPageModule)
  },
  {
    path: 'dinagat-islands1',
    loadChildren: () => import('./dinagat-islands1/dinagat-islands1.module').then( m => m.DinagatIslands1PageModule)
  },
  {
    path: 'dinagat-islands2',
    loadChildren: () => import('./dinagat-islands2/dinagat-islands2.module').then( m => m.DinagatIslands2PageModule)
  },
  {
    path: 'dinagat-islands3',
    loadChildren: () => import('./dinagat-islands3/dinagat-islands3.module').then( m => m.DinagatIslands3PageModule)
  },
  {
    path: 'dinagat-islands4',
    loadChildren: () => import('./dinagat-islands4/dinagat-islands4.module').then( m => m.DinagatIslands4PageModule)
  },
  {
    path: 'dinagat-islands5',
    loadChildren: () => import('./dinagat-islands5/dinagat-islands5.module').then( m => m.DinagatIslands5PageModule)
  },
  {
    path: 'dinagat-islands6',
    loadChildren: () => import('./dinagat-islands6/dinagat-islands6.module').then( m => m.DinagatIslands6PageModule)
  },
  {
    path: 'dinagat-islands7',
    loadChildren: () => import('./dinagat-islands7/dinagat-islands7.module').then( m => m.DinagatIslands7PageModule)
  },
  {
    path: 'dinagat-islands8',
    loadChildren: () => import('./dinagat-islands8/dinagat-islands8.module').then( m => m.DinagatIslands8PageModule)
  },
  {
    path: 'dinagat-islands9',
    loadChildren: () => import('./dinagat-islands9/dinagat-islands9.module').then( m => m.DinagatIslands9PageModule)
  },
  {
    path: 'dinagat-islands10',
    loadChildren: () => import('./dinagat-islands10/dinagat-islands10.module').then( m => m.DinagatIslands10PageModule)
  },
  {
    path: 'surigao-delnorte',
    loadChildren: () => import('./surigao-delnorte/surigao-delnorte.module').then( m => m.SurigaoDelnortePageModule)
  },
  {
    path: 'surigao-delnorte1',
    loadChildren: () => import('./surigao-delnorte1/surigao-delnorte1.module').then( m => m.SurigaoDelnorte1PageModule)
  },
  {
    path: 'surigao-delnorte2',
    loadChildren: () => import('./surigao-delnorte2/surigao-delnorte2.module').then( m => m.SurigaoDelnorte2PageModule)
  },
  {
    path: 'surigao-delnorte3',
    loadChildren: () => import('./surigao-delnorte3/surigao-delnorte3.module').then( m => m.SurigaoDelnorte3PageModule)
  },
  {
    path: 'surigao-delnorte4',
    loadChildren: () => import('./surigao-delnorte4/surigao-delnorte4.module').then( m => m.SurigaoDelnorte4PageModule)
  },
  {
    path: 'surigao-delnorte5',
    loadChildren: () => import('./surigao-delnorte5/surigao-delnorte5.module').then( m => m.SurigaoDelnorte5PageModule)
  },
  {
    path: 'surigao-delnorte6',
    loadChildren: () => import('./surigao-delnorte6/surigao-delnorte6.module').then( m => m.SurigaoDelnorte6PageModule)
  },
  {
    path: 'surigao-delnorte7',
    loadChildren: () => import('./surigao-delnorte7/surigao-delnorte7.module').then( m => m.SurigaoDelnorte7PageModule)
  },
  {
    path: 'surigao-delnorte8',
    loadChildren: () => import('./surigao-delnorte8/surigao-delnorte8.module').then( m => m.SurigaoDelnorte8PageModule)
  },
  {
    path: 'surigao-delnorte9',
    loadChildren: () => import('./surigao-delnorte9/surigao-delnorte9.module').then( m => m.SurigaoDelnorte9PageModule)
  },
  {
    path: 'surigao-delnorte10',
    loadChildren: () => import('./surigao-delnorte10/surigao-delnorte10.module').then( m => m.SurigaoDelnorte10PageModule)
  },
  {
    path: 'surigao-delsur',
    loadChildren: () => import('./surigao-delsur/surigao-delsur.module').then( m => m.SurigaoDelsurPageModule)
  },
  {
    path: 'surigao-delsur1',
    loadChildren: () => import('./surigao-delsur1/surigao-delsur1.module').then( m => m.SurigaoDelsur1PageModule)
  },
  {
    path: 'surigao-delsur2',
    loadChildren: () => import('./surigao-delsur2/surigao-delsur2.module').then( m => m.SurigaoDelsur2PageModule)
  },
  {
    path: 'surigao-delsur3',
    loadChildren: () => import('./surigao-delsur3/surigao-delsur3.module').then( m => m.SurigaoDelsur3PageModule)
  },
  {
    path: 'surigao-delsur4',
    loadChildren: () => import('./surigao-delsur4/surigao-delsur4.module').then( m => m.SurigaoDelsur4PageModule)
  },
  {
    path: 'surigao-delsur5',
    loadChildren: () => import('./surigao-delsur5/surigao-delsur5.module').then( m => m.SurigaoDelsur5PageModule)
  },
  {
    path: 'surigao-delsur6',
    loadChildren: () => import('./surigao-delsur6/surigao-delsur6.module').then( m => m.SurigaoDelsur6PageModule)
  },
  {
    path: 'surigao-delsur7',
    loadChildren: () => import('./surigao-delsur7/surigao-delsur7.module').then( m => m.SurigaoDelsur7PageModule)
  },
  {
    path: 'surigao-delsur8',
    loadChildren: () => import('./surigao-delsur8/surigao-delsur8.module').then( m => m.SurigaoDelsur8PageModule)
  },
  {
    path: 'surigao-delsur9',
    loadChildren: () => import('./surigao-delsur9/surigao-delsur9.module').then( m => m.SurigaoDelsur9PageModule)
  },
  {
    path: 'surigao-delsur10',
    loadChildren: () => import('./surigao-delsur10/surigao-delsur10.module').then( m => m.SurigaoDelsur10PageModule)
  },
  {
    path: 'home0',
    loadChildren: () => import('./home0/home0.module').then( m => m.Home0PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
