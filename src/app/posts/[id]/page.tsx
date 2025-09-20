import { PostInfo } from "./_components/post";
import { Suspense } from "react";

export default async function DetailPost({
    params
}: {
    params: Promise<{id: string}>
}) {

    const { id } = await params;

    return (
        <div>
            <h1>Detalhes posts: {id}</h1>

            {/* Melhor utilizar Suspense quando apenas um componente é demorado.
            O loading.tsx vai aparecer em todo lugar que precisa de um
            carregamento e leva um tempo moderado. */}
            <Suspense fallback={<h1>Carregando...</h1>}>
                <PostInfo id={id}/>
            </Suspense>
        </div>
    )
}