# next-js
Learning Next-js


next -js is file system based routing mechanism



# For creating next-js app 
npx create-next-app@latest project name

# layout
1- for each folder you can design layout

2 - IN layout first the folder layout is going to children prop 
    of root then the folder layout will render to folder layout

# ()
  these are used for group of folder

# []
 these are used for if folder contain a specific folder and you want to display that page to all the pages containin that folder
 ex - docs/1 is same as docs/2 if we save folder as docs/[docid]


 # we can use double [[]] 
   for if more than one path is there like docs/1/2 so we can make folder as docs/[[slug]]

# Routing metadeta
YOu need to return the metadata which type of metadata you want 
ex -  if app folder metadata have less precedence than reciews folder matadata for how did we export it go to reviews and see it


# title
  in title if we make any template object in the parent object then it will display in child title for this refer layout of app and page of blog 

# Link
 ## replace prop is used to delete history and send it to the home page
 
 ## pathname.startWith 
    give you about the information that the link is working or not it is create by usePathname() hook to use react hook we need to add use client on top  
  


# Router (for further order product folder) 
 we use router |----router.forward() - for the forwarding next 
               |----router.back()  -   for the back to the 
                                       browser history
               |----router.push(path)  -  push to the path 
                     - 
  

# When layout and template is both there
  when both layout and template is there then first layout is replaced and layout children is exported by template children 


# not-found.tsx 
  this file is used as what we have to show when the page is not present at there


# loading.tsx
   during loding what to see

# error.tsx
1 - handling the error if any error encounter
2 - if we placed error handling in more specific place then it 
     will give us more benefit
3 - if there is error in layot.tsx in same folder as n    error.    tsx then it will not handle the error the error. 
     tsx should be in parent folder error.tsx 


 # parallel routes(Complex Dashboard folder)
   In parallel route we make a floder with @ name and we can make the folder and once the folder is made we can adjust it in layout folder

   ## default.tsx
   When we make deafult.tsx file it will display content from archived subfolder.
   and all three will display the content of their respective default.tsx file when we display direct archived subfolder it will take it from the default.tsx and initially there was nothing so we have to make defalut.tsx files to show them


   In summary we can say that next js do not have content on their initial load but after the default.tsx file their is some content which is intitally loaded and then path is displayed.
   
   ## You cannot render a route which is parallely render.
      you have to make default.tsx which will make sure that the default there was a file  
   ## COnditional Route (login folder)
 
 # Intercepting Routes (f1)
  conventions 
  only one dot means the folder is within the same directory and two dot means intercepted folder is one diectory above the same directory


  when you have to go some different route file when clicking on link and same when directly go .


  ## search for one level down 


  # One is for parallel and intercepting Route Both
  