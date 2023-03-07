import{L as w}from"./Admin.fd8a5958.js";import{H as g,L as S,r as p,a as _,o as a,c as n,b as u,w as f,d as t,e as U,f as d,v as c,t as r,g as m,s as V,F as h,p as B,h as L,i as v}from"./app.b8b140a1.js";import{S as b}from"./sweetalert2.all.4c9c5a0e.js";import{Z as j}from"./main.c6680d17.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";const C={layout:w,components:{Head:g,Link:S,Datepicker:j},props:{errors:Object,exam_session:Object,exams:Array},setup(l){const e=p({title:l.exam_session.title,exam:l.exam_session.exam_id,start_time:l.exam_session.start_time,end_time:l.exam_session.end_time});return{form:e,submit:()=>e.exam.questions.length===0?b.fire({title:"Gagal!",text:"Ujian tidak memiliki soal",icon:"warning",showConfirmButton:!1,timer:2e3}):L.Inertia.put(`/admin/exam_sessions/${l.exam_session.id}`,{title:e.title,exam_id:e.exam.id,start_time:e.start_time,end_time:e.end_time},{onSuccess:()=>{b.fire({title:"Berhasil!",text:"Sesi Ujian Berhasil Diupdate!",icon:"success",showConfirmButton:!1,timer:2e3})}})}}},D=t("title",null,"Edit Sesi Ujian - SITEDI",-1),E=t("link",{rel:"shortcut icon",type:"image/png",href:"/assets/images/favicon.ico"},null,-1),M={class:"container-fluid mb-5 mt-5"},H={class:"row"},I={class:"col-md-12"},T=t("i",{class:"fa fa-long-arrow-alt-left me-2"},null,-1),A=v(" Kembali"),F={class:"card border-0 shadow"},O={class:"card-body"},W=t("h5",null,[t("i",{class:"fas fa-stopwatch"}),v(" Edit Sesi")],-1),Z=t("hr",null,null,-1),q={class:"row"},G={class:"col-md-6"},K={class:"mb-4"},R=t("label",null,"Nama Sesi",-1),z={key:0,class:"alert alert-danger mt-2"},J={class:"col-md-6"},P={class:"mb-4"},Q=t("label",null,"Ujian",-1),X=["value"],Y={key:0,class:"alert alert-danger mt-2"},$={class:"row"},tt={class:"col-md-6"},et={class:"mb-4"},st=t("label",null,"Waktu Mulai",-1),ot={key:0,class:"alert alert-danger mt-2"},it={class:"col-md-6"},at={class:"mb-4"},nt=t("label",null,"Waktu Selesai",-1),lt={key:0,class:"alert alert-danger mt-2"},rt=t("button",{type:"submit",class:"btn btn-md btn-primary border-0 shadow me-2"}," Update ",-1),dt=t("button",{type:"reset",class:"btn btn-md btn-warning border-0 shadow"}," Reset ",-1);function mt(l,e,o,i,ct,_t){const x=_("Head"),y=_("Link");return a(),n(h,null,[u(x,null,{default:f(()=>[D,E]),_:1}),t("div",M,[t("div",H,[t("div",I,[u(y,{href:"/admin/exam_sessions",class:"btn btn-md btn-primary border-0 shadow mb-3",type:"button"},{default:f(()=>[T,A]),_:1}),t("div",F,[t("div",O,[W,Z,t("form",{onSubmit:e[4]||(e[4]=U((...s)=>i.submit&&i.submit(...s),["prevent"]))},[t("div",q,[t("div",G,[t("div",K,[R,d(t("input",{type:"text",class:"form-control",placeholder:"Masukkan Nama Sesi","onUpdate:modelValue":e[0]||(e[0]=s=>i.form.title=s)},null,512),[[c,i.form.title]]),o.errors.title?(a(),n("div",z,r(o.errors.title),1)):m("",!0)])]),t("div",J,[t("div",P,[Q,d(t("select",{class:"form-select","onUpdate:modelValue":e[1]||(e[1]=s=>i.form.exam=s)},[(a(!0),n(h,null,B(o.exams.data,(s,k)=>(a(),n("option",{key:k,value:s},r(s.title),9,X))),128))],512),[[V,i.form.exam]]),o.errors.exam?(a(),n("div",Y,r(o.errors.exam),1)):m("",!0)])])]),t("div",$,[t("div",tt,[t("div",et,[st,d(t("input",{type:"datetime-local",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=s=>i.form.start_time=s)},null,512),[[c,i.form.start_time]]),o.errors.start_time?(a(),n("div",ot,r(o.errors.start_time),1)):m("",!0)])]),t("div",it,[t("div",at,[nt,d(t("input",{type:"datetime-local",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=s=>i.form.end_time=s)},null,512),[[c,i.form.end_time]]),o.errors.end_time?(a(),n("div",lt,r(o.errors.end_time),1)):m("",!0)])])]),rt,dt],32)])])])])])],64)}const xt=N(C,[["render",mt]]);export{xt as default};
