angular.module('sidebar', [])
    .controller('SidebarCtrl', function SidebarCtrl(){
        var sidebarCtrl = this;
        sidebarCtrl.menu = [
          {
            text:"Dashboard",
            icon:"menu/ic_dashboard",
            href:""
          },
          {
            text:"Patients",
            icon:"menu/ic_patient",
            href:"",
            children:[
              {
                text:"Liste des patients",
                icon:"",
                href:"/patients"
              },
              {
                text:"Nouveau patient",
                icon:"",
                href:"/patients/create"
              }
            ]
          },

        ]
    })
;
