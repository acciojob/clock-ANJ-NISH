//your JS code here. If required.

setInterval(()=>{

	let d=new Date();
	let year=d.getFullYear();
	let month=d.getMonth();
	let date=d.getDate();

	let hours=d.getHours();
	let min=d.getMinutes();
	let sec=d.getSeconds();

	let pg=document.getElementById('p1');

	if(date<=9)
	{
		date='0'+date;
	}

	if(min<=9)
	{
		min='0'+min;
	}

	if(sec<=9)
	{
		sec='0'+sec;
	}

	let timing;
	if(hours<=12)
	{
		timing='AM';
	}
	else
	{
		hours=hours%12;
		timing='PM';
	}
	let text=`${month+1}/${date}/${year}, ${hours}:${min}:${sec} ${timing}`;


	pg.textContent=text;
},1000);