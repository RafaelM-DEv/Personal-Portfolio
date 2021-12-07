import{t as r}from"./vendor.cea666bb.js";const y=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};y();r("#me",{content:"Hi, click me to see my bio!",theme:"light"});r("#facebook",{content:"This is my life!",theme:"light",placement:"bottom"});r("#github",{content:"Here is my work!",theme:"light",placement:"bottom"});r("#linkedin",{content:"This is my professional profile",theme:"light",placement:"bottom"});r("#youtube",{content:"My hobby",theme:"light",placement:"bottom"});r("#instagran",{content:"My moments!",theme:"light",placement:"bottom"});const m=document.querySelector(".home"),a=document.querySelector(".card"),i=document.querySelector("#me");m.addEventListener("mousemove",o=>{let s=(window.innerWidth/2-o.pageX)/100,c=(window.innerHeight/2-o.pageY)/100;a.style.transform=`rotateY(${-s}deg) rotateX(${c}deg)`});m.addEventListener("mouseenter",o=>{a.style.transition="none",i.style.transform="translateZ(20px)"});m.addEventListener("mouseleave",o=>{a.style.transition="all 0.5s ease",a.style.transform="rotateY(0deg) rotateX(0deg)"});i.addEventListener("mousedown",o=>{i.style.transform="translateZ(0px)"});i.addEventListener("mouseup",o=>{i.style.transform="translateZ(20px)"});const p=document.querySelector(".ref"),u=document.querySelector(".header"),l=document.querySelector(".header__navbar"),n=document.querySelector(".header__menu");p.addEventListener("scroll",o=>{p.scrollTop>100?(u.style.transition="2s",u.style.backgroundColor="#F77F00"):u.style.backgroundColor="transparent"});n.addEventListener("click",()=>{n.classList.contains("active")?(n.classList.remove("active"),l.classList.toggle("slideIn"),l.classList.add("slideOut"),n.innerHTML=`
    <style>
    .header__menu {
      margin-top: 2px;
      border-top: 2px solid white;
    }
    .header__menu::before {
      transition: 0.5s;
      top: -7px;
      transform: rotate(90deg);
    }
    .header__menu::after {
      transition: 0.5s;
      top: 4px;
      transform: rotate(90deg);
    }
    </style>
    `):(n.classList.add("active"),l.classList.remove("slideOut"),l.classList.add("slideIn"),n.innerHTML=`
    <style>
    .header__menu {
      border: 0px;
    }
    .header__menu::before {
      transition: 0.5s;
      top: 0;
      transform: rotate(-45deg);
    }
    .header__menu::after {
      transition: 0.5s;
      top: 0;
      transform: rotate(45deg);
    }
    </style>
    `)});document.querySelector(".works");document.querySelector(".card__space");
