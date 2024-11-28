import { ContainerLoading, Loading, MascaraLoading,} from './style'

export function ContainerLoadingComponent({ ...props }) {
    return <ContainerLoading {...props}></ContainerLoading>;
}

export function LoadingComponent() {
    return (
        <>
          <Loading className='one'></Loading>
        </>
    );
}

export function MascaraLoadingComponent({ ...props }) {
    return <MascaraLoading {...props} />;
}