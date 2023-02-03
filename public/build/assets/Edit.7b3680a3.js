import{L as w}from"./Admin.38ca9280.js";import{H as y,L as S,r as V,a as _,o as a,c as n,b as r,w as u,d as t,e as g,f as b,v as U,t as d,g as m,s as p,F as h,p as L,h as j,i as f}from"./app.089bb533.js";import{S as D}from"./sweetalert2.all.ddb810f1.js";import{Z as N}from"./main.18ec42bd.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const M={layout:w,components:{Head:y,Link:S,Datepicker:N},props:{errors:Object,exam_session:Object,exams:Array},setup(l){const e=V({title:l.exam_session.title,exam_id:l.exam_session.exam_id,start_time:l.exam_session.start_time,end_time:l.exam_session.end_time});return{form:e,submit:()=>{j.Inertia.put(`/admin/exam_sessions/${l.exam_session.id}`,{title:e.title,exam_id:e.exam_id,start_time:e.start_time,end_time:e.end_time},{onSuccess:()=>{D.fire({title:"Success!",text:"Sesi Ujian Berhasil Diupdate!.",icon:"success",showConfirmButton:!1,timer:2e3})}})}}}},C=t("title",null,"Edit Sesi Ujian - Aplikasi Ujian Online",-1),E={class:"container-fluid mb-5 mt-5"},H={class:"row"},A={class:"col-md-12"},O=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),F=f(" Kembali"),T={class:"card border-0 shadow"},W={class:"card-body"},Z=t("h5",null,[t("i",{class:"fas fa-stopwatch"}),f(" Edit Sesi")],-1),I=t("hr",null,null,-1),K={class:"row"},R={class:"col-md-6"},q={class:"mb-4"},z=t("label",null,"Nama Sesi",-1),G={key:0,class:"alert alert-danger mt-2"},J={class:"col-md-6"},P={class:"mb-4"},Q=t("label",null,"Ujian",-1),X=["value"],Y={key:0,class:"alert alert-danger mt-2"},$={class:"row"},tt={class:"col-md-6"},et={class:"mb-4"},st=t("label",null,"Waktu Mulai",-1),ot={key:0,class:"alert alert-danger mt-2"},it={class:"col-md-6"},at={class:"mb-4"},nt=t("label",null,"Waktu Selesai",-1),lt={key:0,class:"alert alert-danger mt-2"},dt=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"},"Update",-1),rt=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"},"Reset",-1);function mt(l,e,o,i,_t,ct){const v=_("Head"),x=_("Link"),c=_("Datepicker");return a(),n(h,null,[r(v,null,{default:u(()=>[C]),_:1}),t("div",E,[t("div",H,[t("div",A,[r(x,{href:"/admin/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:u(()=>[O,F]),_:1}),t("div",T,[t("div",W,[Z,I,t("form",{onSubmit:e[4]||(e[4]=g((...s)=>i.submit&&i.submit(...s),["prevent"]))},[t("div",K,[t("div",R,[t("div",q,[z,b(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Sesi","onUpdate:modelValue":e[0]||(e[0]=s=>i.form.title=s)},null,512),[[U,i.form.title]]),o.errors.title?(a(),n("div",G,d(o.errors.title),1)):m("",!0)])]),t("div",J,[t("div",P,[Q,b(t("select",{class:"form-select","onUpdate:modelValue":e[1]||(e[1]=s=>i.form.exam_id=s)},[(a(!0),n(h,null,L(o.exams,(s,k)=>(a(),n("option",{key:k,value:s.id},d(s.title),9,X))),128))],512),[[p,i.form.exam_id]]),o.errors.exam_id?(a(),n("div",Y,d(o.errors.exam_id),1)):m("",!0)])])]),t("div",$,[t("div",tt,[t("div",et,[st,r(c,{modelValue:i.form.start_time,"onUpdate:modelValue":e[2]||(e[2]=s=>i.form.start_time=s)},null,8,["modelValue"]),o.errors.start_time?(a(),n("div",ot,d(o.errors.start_time),1)):m("",!0)])]),t("div",it,[t("div",at,[nt,r(c,{modelValue:i.form.end_time,"onUpdate:modelValue":e[3]||(e[3]=s=>i.form.end_time=s)},null,8,["modelValue"]),o.errors.end_time?(a(),n("div",lt,d(o.errors.end_time),1)):m("",!0)])])]),dt,rt],32)])])])])])],64)}const xt=B(M,[["render",mt]]);export{xt as default};
