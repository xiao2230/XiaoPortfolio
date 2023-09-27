<script setup>

</script>

<template>
    <main>
        <section class="introduction">
            <div class="text">
                <h1>Hi！I'm Xiao</h1>
                <div class="aniText">
                    <h3>And I'm</h3>
                    <h3>Frontend Developer</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestias quae similique necessitatibus
                    nemo. Tenetur modi quibusdam voluptatibus unde aliquid, facilis officiis sunt consequatur ab, tempora
                    facere possimus alias assumenda.</p>
            </div>
            <div class="img">
                <img class="introBg" src="@/assets/img/introBg.png" alt="introBg" title="introBg">
                <img class="intro" src="@/assets/img/intro.png" alt="intro" title="intro">
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.introduction {
    display: flex;
    min-height: 100vh;

    >* {
        flex: 0 0 50%;

        &.text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 20vh 0 20vh 20vh;

            h1,
            h3 {
                font-weight: 700;
            }
        }

        &.img {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 80%;
                border-radius: 50%;
                box-shadow: 0 0 30px 30px var(--primaryColor) inset;

                &.intro {
                    width: 81%;
                    position: absolute;
                }
            }
        }
    }
}
</style>