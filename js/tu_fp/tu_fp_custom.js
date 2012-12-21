function move(f, t)
{
     var i = f.options.length;
     while(i--)
     {
        if(f.options[i].selected)
        {
             t.options[t.options.length] = f.options[i];
             f.options[i] = null;
        }
     }

}