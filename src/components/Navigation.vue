/* eslint-disable */
<template>
  <header :class="{'scrolled-nav':scrollNav}">
    <nav>
      <div class="branding">
        <img src="@/assets/logo.png">
      </div>
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link" :to="{name:'Home'}">Home</router-link></li>
        <li><router-link class="link" :to="{name:''}">Empresas</router-link></li>
        <li><router-link class="link" :to="{name:''}">Reuniones</router-link></li> 
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active' : mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li>
            <dic class="icons">
              <font-awesome-icon :icon="['fad', 'calendar-days']" size="lg" style="--fa-primary-color: #71a1f4; --fa-secondary-color: #2e3748;" />
            </dic>
            <router-link class="linkD" :to="{name:'Home'}">Home</router-link>
          </li>
        <li>
          <router-link class="linkD" :to="{name:''}">Empresas</router-link>
        </li>
        <li>
          <router-link class="linkD" :to="{name:''}">Reuniones</router-link>
        </li> 
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
//import { runInThisContext } from 'vm';

export default {
  name:"navigationView",
  data(){
    return{
      scrollNav:null,
      mobile:null,
      mobileNav:null,
      windowWidth:null,
    }
  },
  created(){
    window.addEventListener('resize',this.checkScreen);
    this.checkScreen();
  },
  mounted(){
    window.addEventListener('scroll',this.updateScroll);
  },
  methods:{
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },
    updateScroll(){
      const scrollPosition=window.scrollY;
      if(scrollPosition>50){
        this.scrollNav=true;
      }
      this.scrollNav=false;
    },
    checkScreen(){
      this.windowWidth=window.innerWidth;
      if(this.windowWidth<=750){
        this.mobile=true;
        return;
      }
      this.mobile=false;
      this.mobileNav=false;
      return;
    },
  }
};
</script>

<style lang="scss" scoped>

@import url(
  'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap'
  );

header{
  background-color: #001f3f;
  opacity: 0.9;
  z-index:99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;
  nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px){
      max-width: 1140px;
    }
  }
  ul, 
  .link{
    font-weight: 500;
    color: #fff;
    list-style: none;
    text-decoration: none;
  }
  li{
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
  }
  .link{
    font-size: 14px;
    background: transparent;
    border: none;
    padding: 1em 1.5em;
    color: #ffedd3;
    text-transform: uppercase;
    position: relative;
    transition: .5s ease;
    font-style: 'Raleway',normal;
    /*font-size: 14px;
    transition: 0.5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    &:hover{
      color:#ffd717;
      border-color: #ffd717;
    }*/
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 0;
      background-color: #ffc506;
      transition: .5s ease;
    }
    &:hover {
      color: #1e1e2b;
      transition-delay: .5s;
    }
    &:hover::before {
      width: 100%;
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 0;
      width: 100%;
      background-color: #ffc506;
      transition: .4s ease;
      z-index: -1;
    }
    &:hover::after {
      height: 100%;
      transition-delay: 0.4s;
      color: aliceblue;
    }
  }
  .branding{
    display:flex;
    align-items: center;
    img{
      width: 50px;
      transition: 0.5s ease all;
    }
  }
  .navigation{
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
  }
  .icon{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
    i{
      cursor: pointer;
      font-size: 24px;
      transition: 0.8s ease all;
    }
  }
  .icon-active{
    transform: rotate(180deg);
  }
  .icons{
    --fa-primary-color: #71a1f4; 
    --fa-secondary-color: #2e3748;
  }
 .dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 200px;
    height: 100%;
    background-color: #ffd717;
    opacity: 0.9;
    top: 0;
    left: 0;
    padding-top: 80px;
    li{
      margin-left: 0;
      .linkD{
        font-size: 14px;
        transition: 0.5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        color: #000;
        font-style: 'Raleway',normal;
        text-decoration:none;
        &:hover{
          color:#0d63a5;
        }
        &::before{
          background-color: #0d63a5;
          content: "";
          display: inline-block;
          height: 1px;
          margin-right: 5px;
          transition: all .42s cubic-bezier(.25,.8,.25,1);
          width: 0;
        }
        &:hover::before{
          background-color: #0d63a5;
          width: 3rem;
        }
      }
    }

  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active{
    transition: 1s ease all;
  }
  .mobile-nav-enter-from,
  .mobile-nav-leave-to{
    transform: translateX(-250px);
  }
  .mobile-nav-enter-to{
    transform: translateX(0);
  }
}

.scrolled-nav{
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  nav{
    padding: 8px 0;
    .branding{
      img{
        width: 40px;
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
      }
    }
  }
}
</style>