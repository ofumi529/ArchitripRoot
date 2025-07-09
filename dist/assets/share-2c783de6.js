function a(r){const t=btoa(JSON.stringify(r)),n=new URL(window.location.href);return n.searchParams.set("plan",t),n.toString()}export{a as generateShareUrl};
