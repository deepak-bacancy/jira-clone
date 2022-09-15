import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="flex p-3 header-design">
      <div className="basis-1/6">
        <div className="flex">
          <div className="inline-grid grid-cols-2 gap-4">
            <span>Logo</span>
            <span>Jira Software</span>
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <div className="inline-grid grid-cols-7 gap-4">
          <span>Your work</span>

          <Link to="/project">Project</Link>
          <span>Filters</span>
          <Link to="/">Dashboard</Link>
          <span>People</span>
          <span>Apps</span>
          <span>Create</span>
        </div>
      </div>
      <div className="basis-1/3">
        <div className="inline-grid grid-cols-2 gap-2 float-right">
          <input placeholder="Search" className="border p-1 pl-4 rounded-md border-black" />
          <div className="flex grid-cols-4 gap-2 justify-end">
            <img
              alt="Notification"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
              height={20}
              width={20}
            />
            <img
              alt="Help"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
              height={20}
              width={20}
            />
            <img
              alt="Setting"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
              height={20}
              width={20}
            />
            <img
              alt="Profile"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAABDQ0N1dXVmZmbz8/O3t7dgYGDDw8NpaWmmpqb29va6urpYWFiCgoLq6uqOjo4fHx+goKALCwuUlJTd3d08PDw0NDQqKioaGhrLy8vV1dUkJCStra0RERFubm5QUFBMymDeAAADiUlEQVRoge2ZC7OyIBCGsdK8JaZ5g6z+/6/8lAVFXZNp5Jz5zvTOnJHDwpMty3KJkK9+Xu3RjhJOSOJYEyf22M7TJvz8A/DqsLMaDc72DsGnBvf3hgcLeLStNVg0e87hvDYZpBZD09JpuilD3IuTeyjcMASw4al6g0vIpX8WCNw3hKfIiyuGeGYIvDCEh0u468g3fvTPGHPL0YhdYWOaOf1cJyTuniXqc8LCbXnYeHbBEEK80TAmOHxP6fDdZ6gOT2NvV8UvDW5HX/ivwePI3VXRSYP/wGLxhf8aPA6pKg4pNPIyqXZMcrRdycDr8MP4P+uKh77gTuJXInlXvK/sB1bgXv9/BeVSoWZb4XR4C1gxjeGpqABfXPvijchlXZNwligd94df94fn8s+Bzcmu8EokoHjosCu8Zr7vs9QOXBe1CBfBbwteWIRD8w/goagQsxp2r9kCXpBP4bCVFhP8Joqxgle0BfjlY7jMUUlRyITiDnDlM0kUxadLpSIDOBzERvVb4wFOzlAZDvBRV24Ap9M+dAIn9Vg7gzvXaBs+PcCAZYTLj44RuBrot3CxRkzY4GvwNB848+DPXRM4iVLx7etkOF52y0Yt+/ariQgm2kzhsYHPgVYwVugVTFs6fWmJ+kw2iOrN/+DWAlTcLrny5uOSFTMzS8rB2fdnO98EvIXT8zzOAt2nfjU338zh3rzvtBF2Hq5MB7TF2GOsBbiZGsE53llNwduKtTSCS4c+gkTqlGvd1Q1EeVRmNVVvBvBYNtUiIJK51h+doh+66Qvq3sLhPPOSr6GlCpXJz5ErM9eYX0UfsW90WtddhR+bvNMDel/zPBjePXhcoTaXDsqbO1y88FL0aZS5xq+hkFvdk2Q/FxblmGhZzVF4uWwo4ShbpEbk8gq7hiLktWhXSzh+b5cR9PLKQ+HLhiqI2MLiqAuphccOKwNKw6y/aoKxS8LxaNSdfmBAqjCEKdRk6jjE+j4tfOtTmG1dQ0H3chKJtBo8AT5KdKty/fg2q3C1/KdcbUm4nENiDyMTT9UW0lr4J6h6kW242vosBaerw5rZaPVf636ZfrO59OvMd/l8GZUje+3ydHJofLsSIZ7Rch5FPnyKeL+G0mSyK7knk4WGsHGB7VXNb3g3V/+CxVJsvjx3crmvzJwurH9237If3OpPOVZ/hLKj/xf+tPljaxcmYXCyoiPfDqqvdtc/t1dAtKV6cDYAAAAASUVORK5CYII="
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
