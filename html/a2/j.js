var a,b,c,time,valid,count=1;
                twelve()
                function update(flag)
                {
                    if(flag==1)//1 is for 24 hr and 0 is for 12 hr
                    {
                        var today=new Date();
                        a=today.getHours();
                        b=today.getMinutes();
                        c=today.getSeconds();
                        if(a<10)
                        {
                            a="0"+a;
                        }
                        if(b<10)
                        {
                            b="0"+b;
                        }
                        if(c<10)
                        {
                            c="0"+c;
                        }
                        time=a+":"+b+":"+c;
                        
                        document.getElementById("clock").innerHTML=time;
                    }
                    else
                    {
                        var today=new Date();
                        console.log(a);
                        a=today.getHours();
                        b=today.getMinutes();
                        c=today.getSeconds();
                        var mode="AM";
                        if(a>12)
                        {
                            mode="PM";
                            a=a-12;
                        }
                        if(a<10)
                        {
                            a="0"+a;
                        }
                        if(b<10)
                        {
                            b="0"+b;
                        }
                        if(c<10)
                        {
                            c="0"+c;
                        }
                        time=a+":"+b+":"+c;
                        document.getElementById("clock").innerHTML=time+" "+mode;   
                    }
                }
              
                function twentyfour() 
                {
                    clearInterval(valid);
                    valid = setInterval(function() { update(1); }, 1000);
                }

                function twelve() 
                {
                    clearInterval(valid);
                    valid = setInterval(function() { update(0); }, 1000);
                }

                function decider()
                {
                    if(count==0)
                    {
                        count=1;
                        twelve();
                    }
                    else
                    {
                        count=0;
                        twentyfour();
                    }
                }


              