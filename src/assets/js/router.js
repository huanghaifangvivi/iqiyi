import VueRouter from 'vue-router';
import index from '../../component/index/index.vue'
import choose from '../../component/index/choose.vue'
import hide from '../../component/others/hide.vue'
import vip from '../../component/index/vip.vue'
import hot from '../../component/index/hot.vue'
import TV from '../../component/index/TV.vue'
import movie from '../../component/index/movie.vue'
import children from '../../component/index/children.vue'
import search from "../../component/others/search";
import user from "../../component/user/user";
import money from "../../component/user/money";
import details from "../../component/detail/details";
import details1 from "../../component/detail/details1";
import details2 from "../../component/detail/details2";
import vip_choose from "../../component/vip_children/vip_choose";
import vip_lib from "../../component/vip_children/vip_lib";
import vip_club from "../../component/vip_children/vip_club";
import vip_gold from "../../component/user/vip_gold";
import vip_all from "../../component/user/vip_all";
import gold from "../../component/user/gold";
import star from "../../component/user/star";
export default new VueRouter({
    routes:[
      {
        path:"/choose",
        component:index,
        children:[
          {
            path:'/choose',
            component:choose
          },
          {
            path:'/vip',
            component:vip,
            children:[
              {
                path:'/vip_choose',
                component:vip_choose
              },
              {
                path:'/vip_lib',
                component:vip_choose
              },
              {
                path:'/vip_club',
                component:vip_choose
              }
            ],
            redirect:'/vip_choose'
          },
          {
            path:'/hot',
            component:hot
          },
          {
            path:'/TV',
            component:choose
          },
          {
            path:'/movie',
            component:vip_choose
          },
          {
            path:'/children',
            component:hot
          },
          {
            path:'/game',
            component:details
          },
          {
            path:'/anime',
            component:hot
          },
          {
            path:'/live',
            component:vip_choose
          },
          {
            path:'/information',
            component:hot
          },
          {
            path:'/iqiyi',
            component:choose
          },
          {
            path:'/play',
            component:hot
          },
          {
            path:'/original',
            component:vip_choose
          },
          {
            path:'/funny',
            component:choose
          },{
            path:'/film',
            component:vip_choose
          },
          {
            path:'/health',
            component:choose
          },
          {
            path:'/lift',
            component:hot
          },
          {
            path:'/mother',
            component:choose
          },
          {
            path:'/talk',
            component:vip_choose
          },
          {
            path:'/military',
            component:choose
          }
        ],
        redirect: '/choose'
      },
      {
        path:"/hide",
        component:hide
      },
      {
        path:"/search",
        component:search
      },
      {
        path:"/user",
        component:user
      },
      {
        path:"/money",
        component:money,
        children: [
          {
            path: "/vip_gold",
            component: vip_gold,
            children: [
              {
                path: '/gold',
                component: gold
              },
              {
                path: '/star',
                component: star
              }
            ],
            redirect: '/gold'
          },
          {
            path: "/vip_all",
            component: vip_all
          }
        ],
        redirect: "/vip_gold"
      },
      {
        path:"/details",
        component:details
      },
      {
        path:"/details1",
        component:details1
      },
      {
        path:"/details2",
        component:details2
      },
      {
        path: "/",
        redirect:'/choose'
      }
    ]
})
