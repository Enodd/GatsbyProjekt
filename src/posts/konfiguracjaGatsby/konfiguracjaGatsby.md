---
title: "Konfiguracja Gatsby.js"
date: "2021-03-31"
updatedate: "2021-04-04"
description: "Gatsby.js jest framework, którego instalacja jak i konfiguracja nie jest skomplikowana. Dostępny jest na każdej platformie, niezależnie od tego czy to linux, windows czy macOS."
id: "2"
---

<style>
    .inline-code{
        background-color: #233D4D; 
        color: #fff; 
        font-family: 'Source code pro', monospace; 
        display: inline; 
        padding: .05vw;
    }
</style>

<article class='article'>

<blockquote class="article__tableofcontent"> 
    <h3>
    	Spis treści
    </h3>
    <ul>
        <li>
            <a href="#post1">
                Instalacja Node.js
            </a>
        </li>
        <li>
            <a href="#post2">
                Instalacja Git'a
            </a>
        </li>
        <li>
            <a href="#post3">
                Przygotowania
            </a>
        </li>
        <li>
            <a href="#post4">
                Przygotowania
            </a>
        </li>
    </ul>
</blockquote>

<div class="article__content">

Gatsby.js jest framework, którego instalacja jak i&nbsp;konfiguracja nie jest skomplikowana. Dostępny jest na każdej platformie, niezależnie od tego czy to <a href='#linux'>linux</a>, <a href='#windows'>windows</a> czy <a href='#macos'>macOS</a>.

<h2 id="post1">
	Instalacja Node.js
</h2>

Node.js jest środowiskiem, które umożliwia uruchamianie kodu Javascript poza przeglądarką. Gatsby jest zbudowany w oparciu na Node.js. Chcąc tworzyć aplikacje webowe przy użyciu Gatsbiego potrzebna nam będzie najnowsza wersja Node.js.

<h5 id='linux'>
    Instalacja na Linux'ie
</h5>

Ze względu na szeroki zakres dystrybucji, które można wybrać, przedstawię proces instalacji z&nbsp;podziałem, który jest widoczny w&nbsp;[dokumentacji](https://www.gatsbyjs.com/docs/tutorial/part-zero). 

<ul>
    <li>
    	<a href="#list1">
            Debian, ubuntu i inne dystrybucje bazujące na&nbsp;apt
        </a>
    </li>
    <li>
    	<a href="#list2">
            Arch, Manjaro i inne dytrybucje oparte o&nbsp;pacman
        </a>
    </li>
    <li>
    	<a href="#list3">
        	Ferdora, RedHat i inne dystrybucje bazujące na&nbsp;dnf
        </a>
    </li>
</ul>

<h5 id="list1">
    Debian, ubuntu i inne dystrybucje bazujące na&nbsp;apt
</h5>

1. Pierwszym krokiem jest uaktualnienie wszystkich pakietów. W&nbsp;tym celu wykorzystujemy te polecenia:

    ```shell
    sudo apt update
    sudo apt -y upgrade
    ```

2. Następnie instalujemy curl - program umożliwiający przenoszenie danych i&nbsp;pobieranie dodatkowych zależności:

    ```Shell
    sudo apt-get install curl
    ```

3. Po instalacji pobieramy i instalujemy nvm:

    ```shell
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
    ```


4. Chcąc się upewnić, że wszystko jest poprawnie zainstalowane, wykorzystujemy poniższe polecenie. Polecenie powinno zwrócić nam versję nvm. W&nbsp;przypadku, gdyby wyświetlał nam się błąd, należy użyć polecenia <span class="inline-code">source ~/.nvm/nvm.sh</span>.

    ```Shell
    nvm --version
    ```

5. Następnie aktualizujemy nvm do najnowszej wersji:

    ```Shell
    nvm install node
    ```

<h5 id="list2">
   Arch, Manjaro i inne dytrybucje oparte o&nbsp;pacman
</h5>

1. Pierwszym krokiem jest uaktualnienie wszystkich pakietów. W&nbsp;tym celu wykorzystujemy te polecenia:

   ```shell
   sudo pacman -Syy
   ```

2. Te dystrybucje domyślnie mają zainstalowanego curl, więc wystarczy instalacja nvm:

   ```shell
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
   ```

3. Przed używaniem nvm, musimy doinstalować dodatkowe programy:

   ```shell
   sudo pacman -S grep awk tar
   ```

4. Chcąc się upewnić, że wszystko jest poprawnie zainstalowane, wykorzystujemy poniższe polecenie. Polecenie powinno zwrócić nam versję nvm. W&nbsp;przypadku, gdyby wyświetlał nam się błąd, należy użyć polecenia <span class='inline-code'>source ~/.nvm/nvm.sh</span>.

    ```Shell
    nvm --version
    ```

5. Następnie aktualizujemy nvm do najnowszej wersji:

    ```Shell
    nvm install node
    ```

<h5 id="list3">
    Ferdora, RedHat i inne dystrybucje bazujące na&nbsp;dnf
</h5>

1. Te dystrybucje domyślnie mają zainstalowanego curl, więc wystarczy instalacja nvm:

   ```shell
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
   ```
2. Chcąc się upewnić, że wszystko jest poprawnie zainstalowane, wykorzystujemy poniższe polecenie. Polecenie powinno zwrócić nam versję nvm.
    
    ```Shell
    nvm --version
    ```

<h5 id='windows'>
    Instalacja na windowsie
</h5>

Instalacja Node.js na systemie windows jest znacznie prostsza niż na linuie, lub macOS. Wystarczy pobrać go z&nbsp;[oficjalnej strony](https://nodejs.org/en/)


<h5 id='macos'>
    Instalacja na macOS
</h5>

###### Instalacja Homebrew

Z informacji, które mamy w&nbsp;dokumentacji, instalację zaleca się w&nbsp;oparciu o&nbsp;[Homebrew](https://brew.sh) -&nbsp;menagera brakujących pakietów dla macOS lub linux.

1. Pierwszą czynnością, jaką należy zrobić jest to zainstalować [Homebrew zgodnie z&nbsp;instrukcjami](https://docs.brew.sh/Installation).

2. Następnie w terminalu sprawdzamy czy całość jest poprawnie zainstalowana. Najprościej jest sprawdzić wersję Homebrew:

    ```Shell
    brew -v
    ```

###### Instalacja Xcode Command Line Tools

**Xcode Command Line Tools** to zestaw narzędzi umożliwiających rozpoczęcie procesu tworzenia aplikacji, w oparciu o terminal/wiersz poleceń, na systemie macOS.

1. Chcąc go zainstalować wystarczy wykorzystać jedno polecenie:

    ```Shell
    xcode-select --install
    ```

> W przypadku, gdy zakończy się to niepowodzeniem, program można pobrać bezpośrednio ze&nbsp;[strony apple](https://developer.apple.com/download/more/) po zalogowaniu się na koncie deweloperskim Apple. 

2. Następnie akceptujemy licencję oprogramowania.

###### Instalacja Node.js

1. W terminalu/wierszu poleceń instalujemy Node.js przy użyciu wcześniej zainstalowanego Homebrew:

    ```Shell
    brew install node
    ```

> Jeżeli nie chcesz instalować przy użyciu Homebrew, możesz pobrać i&nbsp;zainstalować najnowszą wersję Node.js z&nbsp;[oficjalnej strony](https://nodejs.org/en/).

<h2 id="post2">
    Instalacja Git'a
</h2>

Czym jest git?   
Chcąc to określić w najprosztszej możliwej formie, jest to narzędzie/oprogramowanie, które umożliwa kontrolowanie wersji naszego oprogramowania. Wykorzystywane są do tego tzw.&nbsp;migawki, które stanowią "obraz" naszego projektu w&nbsp;momencie zapisu.   
Na co to się przekłada? Umożliwia nam cofanie się do poprzednich wersji kodu, a&nbsp;także na porównywanie wykonanych zmian pomiędzy wersjami.

Na czym polega cały proces instalacji? Niezależnie od systemu, z którego korzystamy elementem wyjściowym będzie [oficjalna strona git'a](https://git-scm.com/downloads), na której znajdują się instrukcje dotyczące procesu instalacji na naszym systemie.

###### Konfiguracja Git'a 

Pierwszym krokiem po instalacji Git'a jest ustawienie nazwy użytkownika i&nbsp;mail'a:

```
git config --global user.name "Nazwa Używkonika"
git config --global user.email przykladowymail@example.com
```

Dlaczego jest to ważne? Jest to ważne, z tego powodu, że każda utworzona migawka używa tych informacji i jest z nimi związana. Przykładowo w sytuacji, gdy będziemy chcieli przesłać te migawki na github'a, nie będziemy musieli, za każdym razem ich podawać.

<h2 id="post3">
Instalacja Gatsby CLI
</h2>

Teraz można przejść bezpośrednio do najważniejszego elementu tego poradnika - instalacji Gatbsiego. Proces ten jest bardzo prosty, wystarczy go zainstalować przy pomocy jednego polecenia:

    ```Shell
    npm install -g gatsby-cli
    ```

> Npm jest to menadżer pakietów JavaScript, który został zainstalowany wraz z&nbsp;Node.js.

I udało się! Jesteśmy gotowi do tworzenia naszej własnej strony opartej na **Gatbsy.js** .  
W następnych artykułach będzie opisanych proces tworzenie tej strony z&nbsp;osoby, która po raz pierwszy korzysta z&nbsp;jakiekolwiek frameworka. Nie ma czego się obawiać, jest tylko to co trzeba zaprogramować.

</div>

</article>