<!-- 컴포넌트의 기본 구조 템플릿 -->
<!-- 먼저 이 템플릿을 복사해서 컴포넌트를 만든다. -->
<!-- 각 property의 정의 순서를 지키고 사용하지 않는 것은 제거 한다. -->
<template lang="html">
  <div>
    <!-- ... -->
  </div>
</template>

<script type="text/javascript">
  export default {
    // 이름 적는 것을 잊지마세요
    name: 'Template',
    // compose new components
    extends: {},
    // 컴포넌트 어트리뷰트 그룹
    props: {
      bar: {}, // 알파벳순으로 정렬합니다
      foo: {},
      fooBar: {}
    },
    // 컴포넌트 변수 그룹
    data () {},
    computed: {},
    // 컴포넌트가 다른 컴포넌트를 사용할 경우
    components: {},
    // 컴포넌트 메서드 그룹
    watch: {},
    methods: {},
    // 컴포넌트 라이프사이클 메서드 그룹
    beforeCreate () {},
    created () {},
    beforeMount () {},
    mounted () {},
    beforeUpdate () {},
    updated () {},
    beforeDestroy () {},
    destroyed () {}
}
</script>

<style scoped>

</style>
