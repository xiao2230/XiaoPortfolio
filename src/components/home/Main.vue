<script setup>

</script>

<template>
    <main>
        <section class="introduction">
            <div class="container">
                <div class="text">
                    <h1>Hi！I'm Xiao</h1>
                    <div class="aniText">
                        <h3>Frontend Developer</h3>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestias quae similique
                        necessitatibus
                        nemo. Tenetur modi quibusdam voluptatibus unde aliquid, facilis officiis sunt consequatur ab,
                        tempora
                        facere possimus alias assumenda.</p>
                </div>
                <div class="img">
                    <img class="introBg" src="@/assets/img/introBg.png" alt="introBg" title="introBg">
                    <img class="intro" src="@/assets/img/intro.png" alt="intro" title="intro">
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.introduction .container {
    display: flex;

    >* {
        flex: 1 0 50%;

        &.text {
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1,
            h3 {
                font-weight: 700;
                font-size: calc($rule / 50);
            }
        }

        &.img {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 3rem;

            img {
                width: 75%;
                border-radius: 50%;
                box-shadow: 0 0 30px 30px var(--primaryColor) inset;

                &.intro {
                    width: 76%;
                    position: absolute;
                }
            }
        }
    }
}

@media (max-width: 767.98px) {
    .introduction .container {
        flex-direction: column-reverse;

        .img img {
            width: 60%;

            &.intro {
                width: 61%;
            }
        }
    }
}
</style>