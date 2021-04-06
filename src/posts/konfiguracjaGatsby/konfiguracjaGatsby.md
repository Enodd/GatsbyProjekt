---
title: "Konfiguracja Gatsby.js"
date: "2021-03-31"
updatedate: "2021-04-04"
description: "Gatsby.js jest framework, którego instalacja jak i konfiguracja nie jest skomplikowana. Dostępny jest na każdej platformie, niezależnie od tego czy to linux, windows czy macOS."
id: "2"
---
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
                Przygotowania
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

Gatsby.js jest framework, którego instalacja jak i&nbsp;konfiguracja nie jest skomplikowana. Dostępny jest na każdej platformie, niezależnie od tego czy to linux, windows czy macOS.

<h2 id="post1">
	Instalacja Node.js
</h2>

Node.js jest środowiskiem, które umożliwia uruchamianie kodu Javascript poza przeglądarką. Gatsby jest zbudowany w oparciu na Node.js. Chcąc tworzyć aplikacje webowe przy użyciu Gatsbiego potrzebna nam będzie najnowsza wersja Node.js.

##### Instalacja na Linux'ie

Ze względu na szeroki zakres dystrybucji, które można wybrać, przedstawię proces instalacji z&nbsp;podziałem, który jest widoczny w&nbsp;<a href="https://www.gatsbyjs.com/docs/tutorial/part-zero/">dokumentacji</a>. 

<ul>
    <li>
    	<a href="list1">
            Debian, ubuntu i inne dystrybucje bazujące na&nbsp;apt
        </a>
    </li>
    <li>
    	<a href="list2">
            Arch, Manjaro i inne dytrybucje oparte o&nbsp;pacman
        </a>
    </li>
    <li>
    	<a href="list3">
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

2. Następnie instalujemy curl - program umożliwiający przenoszenie danych i pobieranie dodatkowych zależności:

    ```Shell
    sudo apt-get install curl
    ```

3. Po instalacji pobieramy i instalujemy nvm:

    ```shell
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
    ```

4. Następnie aktualizujemy nvm do najnowszej wersji:

    ```Shell
    nvm install node
    ```

5. Chcąc się upewnić, że wszystko jest poprawnie zainstalowane, wykorzystujemy poniższe polecenie. Polecenie powinno zwrócić nam versję nvm. W przypadku

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

4. Lorem ipsum

</div>

</article>