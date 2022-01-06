document.getElementById('btnOne').addEventListener('click',function(){
    document.getElementById('tabTwo').style.display="none";
    document.getElementById('tabThree').style.display="none";
    document.getElementById('tabOne').style.display="block";
})

document.getElementById('btnTwo').addEventListener('click',function(){
    document.getElementById('tabTwo').style.display="block";
    document.getElementById('tabThree').style.display="none";
    document.getElementById('tabOne').style.display="none";
})
document.getElementById('btnThree').addEventListener('click',function(){
    document.getElementById('tabThree').style.display="block";
    document.getElementById('tabTwo').style.display="none";
    document.getElementById('tabOne').style.display="none";
})