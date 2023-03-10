import{L as x}from"./Admin.bfe2a804.js";import{P as y}from"./Pagination.bf1b2d20.js";import{H as S,L as B,m as C,a as r,o as _,c as h,b as d,w as i,d as t,e as b,f as L,v as I,F as f,p as T,h as p,t as o,i as v}from"./app.4e8d6ed2.js";import{S as w}from"./sweetalert2.all.2a976501.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const P={layout:x,components:{Head:S,Link:B,Pagination:y},props:{students:Object},setup(){const c=C(new URL(document.location).searchParams.get("q"));return{search:c,handleSearch:()=>{p.Inertia.get("/admin/students",{q:c.value})},destroy:e=>{w.fire({title:"Apakah Anda yakin?",text:"Anda tidak akan dapat mengembalikan ini!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#3085d6",confirmButtonColor:"#d33",confirmButtonText:"Ya, hapus!",cancelButtonText:"Tidak"}).then(m=>{m.isConfirmed&&(p.Inertia.delete(`/admin/students/${e}`),w.fire({title:"Dihapus!",text:"Siswa Berhasil Dihapus!.",icon:"success",timer:2e3,showConfirmButton:!1}))})}}}},A=t("title",null,"Siswa - SITEDI",-1),D=t("link",{rel:"shortcut icon",type:"image/png",href:"/assets/images/favicon.ico"},null,-1),H={class:"container-fluid mb-5 mt-5"},V={class:"row"},q={class:"col-md-8"},E={class:"row"},F={class:"col-md-5 col-12 mb-2"},K={class:"row"},M={class:"col-md-6 col-12 mb-2"},U=t("i",{class:"fa fa-plus-circle"},null,-1),j=v(" Tambah"),J={class:"col-md-6 col-12 mb-2"},O=t("i",{class:"fa fa-file-excel"},null,-1),R=v(" Import"),Y={class:"col-md-7 col-12 mb-2"},z={class:"input-group"},G=t("span",{class:"input-group-text border-0 shadow"},[t("i",{class:"fa fa-search"})],-1),Q={class:"row mt-1"},W={class:"col-md-12"},X={class:"card border-0 shadow"},Z={class:"card-body"},$={class:"table-responsive"},tt={class:"table table-bordered table-centered table-nowrap mb-0 rounded"},st=t("thead",{class:"thead-dark"},[t("tr",{class:"border-0"},[t("th",{class:"border-0 rounded-start",style:{width:"5%"}}," No. "),t("th",{class:"border-0"},"NIS"),t("th",{class:"border-0"},"Nama"),t("th",{class:"border-0"},"Kelas"),t("th",{class:"border-0"},"Jenis Kelamin"),t("th",{class:"border-0"},"Password"),t("th",{class:"border-0 rounded-end",style:{width:"15%"}}," Aksi ")])],-1),et=t("div",{class:"mt-2"},null,-1),ot={class:"fw-bold text-center"},at={class:"text-center"},nt={class:"text-center"},dt={class:"text-center"},it=t("i",{class:"fa fa-pencil-alt"},null,-1),ct=["onClick"],lt=t("i",{class:"fa fa-trash"},null,-1),rt=[lt];function _t(c,a,n,e,m,ht){const k=r("Head"),l=r("Link"),g=r("Pagination");return _(),h(f,null,[d(k,null,{default:i(()=>[A,D]),_:1}),t("div",H,[t("div",V,[t("div",q,[t("div",E,[t("div",F,[t("div",K,[t("div",M,[d(l,{href:"/admin/students/create",class:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},{default:i(()=>[U,j]),_:1})]),t("div",J,[d(l,{href:"/admin/students/import",class:"btn btn-md btn-success border-0 shadow w-100 text-white",type:"button"},{default:i(()=>[O,R]),_:1})])])]),t("div",Y,[t("form",{onSubmit:a[1]||(a[1]=b((...s)=>e.handleSearch&&e.handleSearch(...s),["prevent"]))},[t("div",z,[L(t("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>e.search=s),type:"text",class:"form-control border-0 shadow",placeholder:"masukkan kata kunci dan enter..."},null,512),[[I,e.search]]),G])],32)])])])]),t("div",Q,[t("div",W,[t("div",X,[t("div",Z,[t("div",$,[t("table",tt,[st,et,t("tbody",null,[(_(!0),h(f,null,T(n.students.data,(s,u)=>(_(),h("tr",{key:u},[t("td",ot,o(++u+(n.students.current_page-1)*n.students.per_page),1),t("td",null,o(s.nis),1),t("td",null,o(s.name),1),t("td",at,o(s.classroom.title),1),t("td",nt,o(s.gender),1),t("td",null,o(s.password),1),t("td",dt,[d(l,{href:`/admin/students/${s.id}/edit`,class:"btn btn-sm btn-info border-0 shadow me-2",type:"button"},{default:i(()=>[it]),_:2},1032,["href"]),t("button",{onClick:b(mt=>e.destroy(s.id),["prevent"]),class:"btn btn-sm btn-danger border-0"},rt,8,ct)])]))),128))])])]),d(g,{links:n.students.links,align:"end"},null,8,["links"])])])])])])],64)}const vt=N(P,[["render",_t]]);export{vt as default};