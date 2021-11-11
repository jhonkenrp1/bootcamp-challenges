# La respuesta que pusiste en cada nivel
1.  plate
2.  bento
3.  #fancy
4.  plate apple
5.  #fancy pickle
6.  .small
7.  orange.small
8.  bento orange.small
9.  plate,bento
10. *
11. plate *
12. plate + apple
13. bento ~ pickle
14. plate > apple
15. orange:first-child
16. plate :only-child
17. .small:last-child 
18. :nth-child(3)
19. plate + :nth-last-child(3)
20. apple:first-of-type
21. plate:nth-of-type(odd)+ plate 
22. :nth-of-type(2n+3)
23. apple:only-of-type 
24. .small:last-of-type 
25. bento:empty
26. apple:not(.small)
27. [for]
28. plate[for]
29. bento[for="Vitaly"]
30. [for^="Sa"]
31. [for$="to"] 
32. [for*="bb"]

![image](https://user-images.githubusercontent.com/78806040/141018372-4fbd6dbf-2806-4444-befb-55619c1e8034.png)

# Selectores de CSS
    .ejemplo=Selecciona los elementos class="ejemplo"
    .ejemplo1.ejemplo2=Selecciona los elementos class="ejemplo1 ejemplo2"
    .ejemplo1 .ejemplo2=Selecciona los elementos class="ejemplo1" class="ejemplo2", el ejemplo2 esta dentro del ejemplo1
    #ejemplo=Selecciona el id="ejemplo"
    *=Selecciona todo los elementos
    p=Selecciona los elementos <p>
    p.ejemplo=Selecciona los elementos con <p> con class="ejemplo"  
    div, p= Selecciona los <div> y <p>
    div p= Seleccion todo los p dentro del div
    div>p= Selecciona los p directamente en div
    div + p= Selecciona los p despues del div
    p~ul = Selecciona todo los ul que antes tienen una p
    [atributo]= Selecciona todo los elementos que tienen atributo
    [attributo=valor]=Selecciona todo los elementos con atributo igual a valor
    [attributo~=val]=Selecciona todo los elementos con atributo que contengan la palabra val
    [attributo^=val]=Selecciona todo los elementos con atributo que empiece con val
    [attributo$=or]=Selecciona todo los elementos con atributo que termine en or
    [attributo*=al]=Selecciona los elementos con atributo que contienen al
    p:empty=Selecciona los elementos con p que no tienen hijos
    p:first-child=Selecciona el primer hijo de p
    p::first-letter=Selecciona la primera letra de cada elemento p
    p::first-line=Selecciona la primera linea de cada elemento
    p:first-of-type= Selecciona el primer elemento de cada p
    p:last-child=Selecciona el ultimo hijo de cada p
    p:last-of-type=Selecciona el ultimo elemento de cada p
    a:link=Selecciona todos los links
    :not(x)=Selecciona todos menos p
    p:nth-child(2)=Selecciona el elemento p que es el segundo hijo de su padre
    p:nth-last-child(2)=Selecciona el segundo hijo contando desde el ultimo 
    p:nth-last-of-type(2)=Selecciona el segundo hijo contando desde el ultimo tipo p
    p:only-of-type=Selecciona cada elemento p unico
    p:only-child=Selecciona los p con un unico hijo
    
    #Especificidad en CSS y como se calcula
    Es el valor que toma cada elemento en una hoja de estilo habiendo elementos con mas o menos valor y peso señalando esto la especificidad
    El calculo se realiza sumando los puntos totales de una sentencia CSS en base a los selectores o elementos de los que esta integrado mientras mas elementos mayor peso se prioriza a esas sentencias ejecutando dichos elementos. Cuanto mas especifica sea la regla tendra mayor prioridad y si dos tienen la misma especificidad se ejecutara el de ultimo lugar debido a que va en cascada.
    
    

  

