---
title: "Czym jest Gatsby.js?"
date: "2021-03-30"
updatedate: "2021-03-31"
description: "Czym jest Gatsby.js? Co jest Serverless Rendering?  
Czym są frameworki i co takiego przyniósł Gatsby.js?  
Jakie są jego wady, a jakie zalety?  
Narasta wiele pytań, na których część odpowiemy w tym artykule."
id: "1"
banner: "./banner.png"

---
<style>
/* local styling */
    img {
        width: 100%;
    }
    .img1, .img2{
        margin: 2vw;
    }
    .img1{
        width: 80vw;
    }
    .img2 {
        width: 80vw;
    }
    @media (min-width:540px){
        .img1{
            width: 60vw;
        }
        .img2 {
            width: 60vw;
        }
    }
</style>
<article class="article">

> ### Spis treści 
> * <a href="#post1">To czym jest ten Gatsby?</a>
> * <a href="#post2">Do czego można go wykorzystać?</a>
> * <a href="#post3">Co to jest Serverless Rendering?</a>
> * <a href="#post4">Wady i zalety Gatsby.js</a>



Czym jest Gatsby.js? Co jest Serverless Rendering?  
Czym są frameworki i co takiego przyniósł Gatsby.js?  
Jakie są jego wady, a jakie zalety?  
Narasta wiele pytań, na których część odpowiemy w tym artykule.

<h2 id="post1">To czym jest ten Gatsby?</h2>

Gatsby.js jest to framework z rodziny frameworków działających na podstawie React'a  
oraz GraphQL - sposobu komunikacji z serwerem API. Chcąc uzyskać szybkie i&nbsp;poprawne pozycjonowanie strony wymaga od nas czystego HTML'a - bez różnych dodatkowych znaczników jakie można znaleźć np. w React'cie. Korzystając z Gatsby.js można uzyskać czysty plik HTML bez pozyskiwania dodatkowych plików.

<h2 id="post2">Do czego można go wykorzystać?</h2>

Jego podstawowym zadaniem jest przede wszystkim optymalizacja kodu strony internetowej, aby korzystanie z&nbsp;niego było szybkie i&nbsp;wygodne - niezależnie od urządzenia, na&nbsp;którym właśnie ją otwarliśmy.  
Wcześniej wspomniano o&nbsp;tym, że&nbsp;Gatsby.js w&nbsp;znacznym stopniu korzysta z&nbsp;React'a oraz&nbsp;z&nbsp;GraphQL. Połączenie tych dwóch elementów pozwala nam na&nbsp;lepsze poznanie obu elementów, bądź też polepszenia swoich umiejętności. Informacja ta&nbsp;jest takim punktem wyjścia, który sprawia, że&nbsp;nie należy się go obawiać.

> Warto w tym miejscu powiedzieć, że informacje, które przechodzą przez Gatsby.js mogą mieć dowolne źródło. Zostają one odczytane niezależnie od tego skąd pochodzą. Tak też możemy je pobierać z&nbsp;Wordpressa lub innego CMS, lub tak jak ten artykuł i&nbsp;wszystkie na&nbsp;tej&nbsp;witrynie&nbsp;-&nbsp;z&nbsp;Markdowna.

<div class="img1">

<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Co to Gatsby?">

</div>

<h2 id="post3"> Co to jest Serverless Rendering? </h2>

Chcąc opisać to&nbsp;czym jest **serverless rendering** warto opisać inne sposoby generowania&nbsp;/&nbsp;renderowania stron internetowych.  

#### Wyróżniamy ich 3 rodzaje:

1. Client render - W&nbsp;tym przypadku strona jest tworzona na komputerze lub telefonie odwiedzającego, z małych "paczek" kodu, które są przesyłane z serwera. Ma to na celu odciążenie serwera jak najbardziej jak jest to możliwe.
2. Server render - Strona w tej sytuacji powstaje na serwerze, na którym są przetrzymywane pliki źródłowe, a&nbsp;kolejne strony w&nbsp;witrynie są&nbsp;tworzone, gdy użytkownik wyśle o&nbsp;nie zapytanie.
3. Serverless rendering - Nasz temat, główny tej&nbsp;sekcji. Całość jest tworzona podczas procesu budowania strony - tzw.&nbsp;builda. W&nbsp;wyniku tego na serwerze, na&nbsp;którym jest strona znajdują się czyste pliki HTML, dzięki czemu nie tracimy niepotrzebnego czasu na&nbsp;ładowanie i zaczytywanie strony.

<h2 id="post4">Wady i zalety Gatbsy.js</h2>

Jedną z najważniejszych, jak nie najważniejszą zaletą w przypadku **Gatsby.js** jest bardzo prosta obsługa. Ja jako osoba stawiająca swoje pierwsze kroki z&nbsp;frameworkami ogólnie, nie miałem większych problemów z&nbsp;używaniem tego frameworka. Spokojnie można stwierdzić, że&nbsp;osoba, która do tej pory korzystała z&nbsp;React'a nie będzie miała problemu użytkowaniem Gatbsy.js.  
Inną ważną zaletą jest ilość dostępnych pluginów. Wykorzystanie ich skraca znacznie czas pracy. Uznawane są przez niektórych jako jedno podstawowe narzędzi, które sprawdza się przy budowaniu obszernych aplikacji webowych.  
Elementem, który dla części osób będzie szybkość działania. Zauważyć ją można w trakcie nawigowania stron, czy samego ładowania. Oczywistym jest też to, że ten efekt nie jest uzyskiwany dzięki użytkowaniu samego Gatsby.js. Konieczne jest wykorzystanie wyżej wymienionych pluginów, których dobór jest uzależniony od tego jaką aplikację tworzymy. Nie mniej jednak wyniki są znacznie lepsze, niż przy wykorzystaniu innych rozwiązań. 

> W tym miejscu należy docenić to jak dużym plusem jest pełne indeksowanie przez wyszukiwarki. Dzięki statycznym stronom HTML wyszukiwarki ją w stanie "przejrzeć" całą treść strony, co przekłada się na przewagę dla pozycjonowania się witryny.

<div class="img2">
<img src="https://images.unsplash.com/photo-1501250987900-211872d97eaa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="wyszukiwanie informacji">
</div>

Dzięki statycznym stronom stworzonym przez Gatsby.js hosting stron internetowych jest prostszy i&nbsp;tańszy w zasoby. Nie mamy żadnego kodu na serwerze, dzięki czemu mamy niewielkie wykorzystanie transferu, a także nasze pliki nie zajmują dużej ilości miejsca na&nbsp;dysku. Z hostowaniem tego typu stron, poradzi sobie niemal każdy dostawca usług hostingowych. 
Jako, że Gatsby.js nie jest tworem idealnym, ma także swoje minusy. Można się ich doszukiwać w ograniczeniach generatorów stron, które wynikają z faktu wykorzystywania stron statycznych. Sprowadza się do tego, że pomimo ich prostoty i szybkiego ładowania się, nie sprawdzają się w przypadku częstych aktualizacji treści.

<h2 id="post5">Czy warto wykorzystać Gatsby.js w&nbsp;swoich projektach?</h2>

Zdaniem niezależnego autora - tak, to&nbsp;samo tyczy się pozostałych programistów, którzy wykorzystują  Gatsby.js niezależnie od&nbsp;tego czy tworzą mniejsze lub większe witryny. Jest to dobre rozwiązanie dla osób, które cenią szybkość działania, dopasowanie do&nbsp;wymogów SEO oraz bezpieczeństwo.   
Poza tym dzięki licencji open source, jest on darmowy, więc czemu nie spróbować swoich sił?
</article>